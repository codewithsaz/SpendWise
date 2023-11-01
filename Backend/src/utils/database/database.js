const mongoose = require("mongoose");

mongoose.connect(process.env.mongoDBLocal, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("open", () => {
  console.log("DB connected");
});

connection.on("error", (err) => {
  console.error("DB error:", err);
});

module.exports = connection;
