const transactionModel = require("../models/transactionModel");

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
    if (addedExpense)
      res.status(201).json({ success: true, message: "Expense Added" });
    else throw new Error("Cant add expense right now");
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
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
