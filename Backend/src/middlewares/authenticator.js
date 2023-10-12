const UserModel = require("../models/userModel");
const saltRounds = Number(process.env.SALT_ROUNDS);
const jwt = require("jsonwebtoken");
exports.authenticate = async (req, res, next) => {
  try {
    // console.log(req.cookies);
    const token = req.cookies.token;
    if (token) {
      const userID = jwt.verify(token, process.env.JWT_SECRET_KEY).userId;
      if (!userID) throw new Error("Token expired or bad token");

      const user = await UserModel.findOne({ _id: userID }).exec();
      if (!user) throw new Error("No user found");
      req.user = user;
      next();
    } else throw new Error("No token in request");
  } catch (err) {
    console.log(err.message);
    return res
      .status(401)
      .json({ success: false, message: "Your not authorized" });
  }
};

exports.verifyPremiumMembership = async (req, res, next) => {
  try {
    // console.log(req.cookies);
    const token = req.cookies.token;
    if (token) {
      const userID = jwt.verify(token, process.env.JWT_SECRET_KEY).userId;
      const user = await UserModel.findOne({ _id: userID }).exec();
      if (user.isPremium) {
        req.user = user;
        next();
      } else {
        return res
          .status(403)
          .json({ success: false, message: "Your not authorized" });
      }
    } else throw new Error("No token in request");
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .json({ success: false, message: "Your not authorized" });
  }
};
