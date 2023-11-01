const transactionModel = require("../models/transactionModel");

exports.getAllTranscations = async (req, res) => {
  const pageNumber = Math.floor(Number.parseInt(req.query.page));
  const pageSize = Math.floor(Number.parseInt(req.query.size));
  try {
    const skip = (pageNumber - 1) * pageSize;

    const query = transactionModel
      .find(
        {
          userId: req.user._id,
        },
        "amount date.day description category transcationType "
      )
      .sort({ _id: -1 })
      .skip(skip)
      .limit(pageSize);

    const totalTransaction = await transactionModel.countDocuments({
      userId: req.user._id,
    });

    const allTranscations = await query.exec();
    if (allTranscations)
      res.status(201).json({
        success: true,
        currentPage: pageNumber,
        totalPages: Math.ceil(totalTransaction / pageSize),
        history: allTranscations,
      });
    else throw new Error("Cant add expense right now");
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};

exports.getTransactionsByYear = async (req, res) => {
  const year = Number.parseInt(req.query.year);

  try {
    const query = transactionModel.aggregate([
      {
        $match: {
          userId: req.user._id,
        },
      },
      {
        $group: {
          _id: {
            year: "$date.year",
            month: "$date.month",
          },
          totalExpenses: {
            $sum: {
              $cond: [{ $eq: ["$transcationType", "expense"] }, "$amount", 0],
            },
          },
          totalIncome: {
            $sum: {
              $cond: [{ $eq: ["$transcationType", "income"] }, "$amount", 0],
            },
          },
        },
      },
      {
        $sort: {
          "_id.year": -1,
          "_id.month": 1,
        },
      },
      {
        $project: {
          _id: 0,
          year: "$_id.year",
          month: "$_id.month",
          totalExpenses: 1,
          totalIncome: 1,
        },
      },
    ]);

    const results = await query.exec();

    if (results) {
      res.status(201).json({
        success: true,
        history: results,
      });
    } else {
      throw new Error("Can't fetch transactions for the specified year");
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(501).json({ success: false, message: error.message });
  }
};
