const mongoose = require("mongoose");

const connection = mongoose
  .createConnection(process.env.mongoDBLocal)
  .on("open", () => {
    console.log("DB connected");
  })
  .on("error", () => {
    console.log("DB error");
  });

module.exports = connection;
