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

    console.log(addedExpense);
    if (addedExpense) {
      await UserModel.updateOne(
        { _id: req.user._id },
        {
          $inc: {
            expense: amount,
            savings: -amount, // Decrement savings by the same amount as the expense
          },
        }
      );
      res.status(201).json({ success: true, message: "Expense Added" });
    } else throw new Error("Cant add expense right now");
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
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
          expenses: amountDifference,
          savings: -amountDifference,
        },
      }
    );

    res.status(200).json({ success: true, message: "Expense Updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
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
      })
      //   .sort({ "date.month": 1 })
      .exec();
    console.log(allExpense);
    if (allExpense)
      res.status(201).json({ success: true, message: "Expense Found" });
    else throw new Error("Cant add expense right now");
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};
