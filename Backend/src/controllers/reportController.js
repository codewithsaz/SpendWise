const UserModel = require("../models/userModel");
const ReportModel = require("../models/reportModel");
const transactionModel = require("../models/transactionModel");
const AWS = require("aws-sdk");
const reportModel = require("../models/reportModel");
const excel = require("exceljs");
const fs = require("fs");
const stream = require("stream");

exports.getReports = (req, res) => {
  ReportModel.find(
    {
      userId: req.user._id,
    },
    {
      date: 1,
      fileURL: 1,
      _id: 0,
    }
  )
    .then((reports) => {
      res.status(201).json({ success: true, reports: reports.reverse() });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Cant get the reports",
      });
    });
};

exports.downloadExpense = async (req, res) => {
  try {
    const userID = req.user._id;

    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet("Transactions");
    const transactions = await transactionModel
      .find(
        {
          userId: req.user._id,
        },
        "amount date description category transcationType "
      )
      .exec();

    worksheet.columns = [
      { header: "Day", key: "date.day" },
      { header: "Month", key: "date.month" },
      { header: "Year", key: "date.year" },
      { header: "Type", key: "transcationType" },
      { header: "Amount", key: "amount" },
      { header: "Category", key: "category" },
      { header: "Description", key: "description" },
    ];
    // Add data to the worksheet
    worksheet.addRows(
      transactions.map((transaction) => ({
        "date.day": transaction.date.day,
        "date.month": transaction.date.month,
        "date.year": transaction.date.year,
        transcationType: transaction.transcationType,
        amount: transaction.amount,
        category: transaction.category,
        description: transaction.description,
      }))
    );

    const buffer = await workbook.xlsx.writeBuffer();

    // Create a stream for the Excel file
    const readStream = new stream.PassThrough();
    readStream.end(buffer);
    // const stringifiedExpenses = JSON.stringify(expenses);
    const filename = `ExpenseOf${userID}/${new Date()}.xlsx`;
    const fileUrl = await uploadToS3(readStream, filename);
    const creationDate = new Date().toDateString();
    const addedReport = await ReportModel.create({
      date: creationDate,
      fileURL: fileUrl,
      userId: req.user._id,
    });
    res.status(201).json({ URL: fileUrl, success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Cant get the fileUrl",
    });
  }
};

async function uploadToS3(fileContent, fileName) {
  const BUCKET_NAME = process.env.BUCKET_NAME;
  const IAM_USER_KEY = process.env.IAM_USER_KEY;
  const IAM_USER_SECRET = process.env.IAM_USER_SECRET;
  const AWS_USER_REGION = process.env.AWS_USER_REGION;
  AWS.config.update({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    region: AWS_USER_REGION,
  });
  const s3 = new AWS.S3();

  const params = {
    Bucket: "expensetrackerappreports",
    Key: fileName,
    Body: fileContent,
    ACL: "public-read",
  };
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        console.log("Error:", err);
        reject(err);
      } else {
        resolve(data.Location);
      }
    });
  });
}
