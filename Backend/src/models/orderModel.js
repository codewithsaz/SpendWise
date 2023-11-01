const mongoose = require("mongoose");
const db = require("../utils/database/database");

const { Schema } = mongoose;

const orderSchema = new Schema({
  paymentID: {
    type: String,
  },
  orderID: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const orderModel = db.model("Order", orderSchema);

module.exports = orderModel;
