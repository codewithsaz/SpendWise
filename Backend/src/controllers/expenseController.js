const transactionModel = require("../models/transactionModel");
const UserModel = require("../models/userModel");

exports.addExpense = async (req, res) => {
  const { amount, description, date, category } = req.body;

  try {
    const addedExpense = await transactionModel.create({
      amount: amount,
      date: date,
      description: description,
      category: category,
      transcationType: "expense",
      userId: req.user._id,
    });
    if (addedExpense) {
      await UserModel.updateOne(
        { _id: req.user._id },
        {
          $inc: {
            expense: amount,
            savings: -amount,
          },
        }
      );
      res.status(201).json({ success: true, message: "Expense Added" });
    } else throw new Error("Cant add expense right now");
  } catch (error) {
    res
      .status(501)
      .json({ success: false, message: "Cant add expense right now" });
  }
};

exports.updateExpense = async (req, res) => {
  const { expenseId, amount, description, date, category } = req.body;
  const { referenceID } = req.params;

  try {
    const existingExpense = await transactionModel.findOne({
      _id: referenceID,
      userId: req.user._id,
      transcationType: "expense",
    });

    if (!existingExpense) {
      res.status(404).json({ success: false, message: "Expense not found" });
      return;
    }

    const amountDifference = amount - existingExpense.amount;
    existingExpense.amount = amount;
    existingExpense.description = description;
    existingExpense.date = date;
    existingExpense.category = category;

    await existingExpense.save();
    await UserModel.updateOne(
      { _id: req.user._id },
      {
        $inc: {
          expense: amountDifference,
          savings: -amountDifference,
        },
      }
    );

    res.status(200).json({ success: true, message: "Expense Updated" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Cant update expense right now" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { referenceID } = req.params;

  try {
    const deletedExpense = await transactionModel.deleteOne({
      _id: referenceID,
    });
    if (deletedExpense)
      res.status(201).json({ success: true, message: "Expense Deleted" });
    else throw new Error("Cant delete expense right now");
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const allExpense = await transactionModel

      .find({
        userId: req.user._id,
        transcationType: "expense",
      })
      //   .sort({ "date.month": 1 })
      .exec();
    if (allExpense)
      res.status(201).json({ success: true, message: "Expenses Fetched" });
    else throw new Error("Cant fetch expense right now");
  } catch (error) {
    res
      .status(501)
      .json({ success: false, message: "Cant fetch expense right now" });
  }
};

exports.getExpenseByCategory = async (req, res) => {
  const year = Number.parseInt(req.query.year);

  try {
    const expenseQuery = transactionModel.aggregate([
      {
        $match: {
          userId: req.user._id,
          transcationType: "expense", // Filter for expense transactions
        },
      },
      {
        $group: {
          _id: {
            year: "$date.year",
            category: "$category", // Group by category
          },
          totalExpenses: {
            $sum: "$amount", // Calculate the sum of expenses
          },
        },
      },
      {
        $sort: {
          "_id.year": -1,
        },
      },
      {
        $project: {
          _id: 0,
          year: "$_id.year",
          category: "$_id.category", // Include category field
          totalExpenses: 1,
        },
      },
    ]);

    const expenseResults = await expenseQuery.exec();

    if (expenseResults) {
      res.status(201).json({
        success: true,
        history: expenseResults,
      });
    } else {
      throw new Error("Can't fetch transactions for the specified year");
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(501).json({ success: false, message: error.message });
  }
};
