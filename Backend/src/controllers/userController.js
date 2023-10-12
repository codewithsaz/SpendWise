const UserModel = require("../models/userModel");
const userService = require("../services/userService");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const doesUserExists = await UserModel.find({ email: email }).exec();
    if (doesUserExists)
      res.status(404).json({ success: false, message: "User Already Exists" });
    else {
      const encrptedPass = await userService.encrptyPassword(password);
      const createUser = await UserModel.create({
        name: name,
        email: email,
        password: encrptedPass,
      }).exec();

      if (createUser)
        res.status(201).json({ success: true, message: "User Created" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "User Creation Failed" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email }).exec();
    if (user) {
      console.log("user", user);
      const verifyUser = await userService.verifyPassword(
        password,
        user.password
      );
      if (verifyUser) {
        console.log(verifyUser);
        try {
          const token = await userService.generateToken(
            user._id,
            user.name,
            user.isPremium
          );
          res
            .status(201)
            .cookie("token", token, {
              httpOnly: true, // This makes the cookie HttpOnly
              secure: true,
              maxAge: 7 * 24 * 60 * 60 * 1000, // Expiration time in milliseconds
              // sameSite: "strict", // You can adjust SameSite as needed
            })
            .json({
              success: true,
              user: {
                name: user.name,
                expense: user.expense,
                income: user.income,
                savings: user.savings,
                isPremium: user.isPremium,
              },
            });
        } catch (error) {
          console.log(error);
          throw new Error("Token Generation Failed");
        }
      } else {
        throw new Error("Wrong credentials");
      }
    } else throw new Error("User not found");
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
  }
};

exports.getUserDetails = async (req, res) => {
  const { email, password } = req.user;

  try {
    const user = await UserModel.findOne({ email: email }).exec();
    if (user) {
      res.status(201).json({
        success: true,
        user: {
          name: user.name,
          expense: user.expense,
          income: user.income,
          savings: user.savings,
          isPremium: user.isPremium,
        },
      });
    }
  } catch (error) {}
};

exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie("token").json({ success: true });
  } catch (error) {}
};
