const UserModel = require("../models/userModel");
const saltRounds = Number(process.env.SALT_ROUNDS);
const jwt = require("jsonwebtoken");
exports.authenticate = async (req, res, next) => {
  try {
    // console.log(req.cookies);
    const token = req.cookies.token;
    const userID = jwt.verify(token, process.env.JWT_SECRET_KEY).userId;
    const user = await UserModel.findOne({ _id: userID }).exec();

    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .json({ success: false, message: "Your not authorized" });
  }
};

exports.verifyPremiumMembership = async (req, res, next) => {
  try {
    // console.log(req.cookies);
    const token = req.cookies.token;
    const userID = jwt.verify(token, process.env.JWT_SECRET_KEY).userId;
    const user = await UserModel.findOne({ _id: userID }).exec();
    console.log(user);
    if (user.isPremium) {
      req.user = user;
      next();
    } else {
      return res
        .status(403)
        .json({ success: false, message: "Your not authorized" });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .json({ success: false, message: "Your not authorized" });
  }
};
