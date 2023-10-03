const transactionModel = require("../models/transactionModel");

exports.getAllTranscations = async (req, res) => {
  const pageNumber = Number.parseInt(req.query.page);
  const pageSize = Number.parseInt(req.query.size);
  try {
    const skip = (pageNumber - 1) * pageSize;

    const query = transactionModel
      .find(
        {
          userId: req.user._id,
        },
        "amount date.day description category transcationType "
      )
      .skip(skip)
      .limit(pageSize);

    const totalTransaction = await transactionModel.countDocuments();

    const allTranscations = await query.exec();
    if (allTranscations)
      res.status(201).json({
        success: true,
        totalTransaction: totalTransaction,
        currentPage: pageNumber,
        totalPages: Math.ceil(totalTransaction / pageSize),
        history: allTranscations,
      });
    else throw new Error("Cant add expense right now");
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};
