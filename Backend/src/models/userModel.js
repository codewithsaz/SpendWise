const mongoose = require("mongoose");
const db = require("../utils/database/database");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  income: {
    type: Number,
    default: 0,
  },
  expense: {
    type: Number,
    default: 0,
  },
  income: {
    type: Number,
    default: 0,
  },
  savings: {
    type: Number,
    default: 0,
  },
  isPremium: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const userModel = db.model("User", userSchema);

module.exports = userModel;
