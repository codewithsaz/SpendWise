const mongoose = require("mongoose");
const db = require("../utils/database/database");

const { Schema } = mongoose;

const reportSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  fileURL: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const reportModel = db.model("Report", reportSchema);

module.exports = reportModel;
