const transactionModel = require("../models/transactionModel");

exports.addIncome = async (req, res) => {
  const { amount, description, date, category } = req.body;

  try {
    const addedExpense = await transactionModel.create({
      amount: amount,
      date: date,
      description: description,
      category: category,
      transcationType: "income",
      userId: req.user._id,
    });

    console.log(addedExpense);
    if (addedExpense)
      res.status(201).json({ success: true, message: "Income Added" });
    else throw new Error("Cant add income right now");
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};

exports.deleteIncome = async (req, res) => {
  const { referenceID } = req.params;
  console.log(referenceID);
  try {
    const deletedExpense = await transactionModel.deleteOne({
      _id: referenceID,
    });
    if (deletedExpense)
      res.status(201).json({ success: true, message: "Income Deleted" });
    else throw new Error("Cant delete income right now");
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};

exports.getIncome = async (req, res) => {
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
