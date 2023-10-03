const mongoose = require("mongoose");
const db = require("../utils/database/database");

const { Schema } = mongoose;

const transactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    day: {
      type: String,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  transcationType: {
    type: String,
    enum: ["expense", "income"],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const transactionModel = db.model("Transaction", transactionSchema);

module.exports = transactionModel;
