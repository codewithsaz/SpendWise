const orderModel = require("../models/orderModel");
const Razorpay = require("razorpay");
const userModel = require("../models/userModel");
const userService = require("../services/userService");

exports.purchaseMembership = async (req, res) => {
  try {
    const rzp = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const existingOrder = await orderModel.findOne({
      status: "PENDING",
      userId: req.user._id,
    });
    if (existingOrder) {
      res.status(201).json({ success: true, orderID: existingOrder.orderID });
    } else {
      const premium_amount = 999 * 100;

      rzp.orders.create(
        { amount: premium_amount, currency: "INR" },
        async (err, order) => {
          if (err) {
            console.log(err);
            throw new Error("razorpay error");
          }
          const createdOrder = await orderModel.create({
            key_id: process.env.RAZORPAY_KEY_ID,
            orderID: order.id,
            status: "PENDING",
            userId: req.user._id,
          });
          if (!createdOrder) throw new Error("Cant create order now");
          else {
            res.status(201).json({ success: true, orderID: order.id });
          }
        }
      );
    }
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Something went wrong" });
  }
};

exports.purchaseComplete = async (req, res) => {
  try {
    const { orderID, paymentID } = req.body;

    const existingOrder = await orderModel.findOne({
      orderID: orderID,
      status: { $in: ["PENDING", "FAILED"] },
      userId: req.user._id,
    });
    if (existingOrder) {
      existingOrder.paymentID = paymentID;
      existingOrder.status = "SUCCESS";
      await existingOrder.save();

      const user = await userModel.findById(req.user._id);
      if (user) {
        user.isPremium = true;
        await user.save();

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
      } else throw new Error("User doesnt exist");
    } else {
      throw new Error("Order doesnt exist");
    }
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Something went wrong" });
  }
};

exports.purchaseFailed = async (req, res) => {
  try {
    const { orderID, paymentID } = req.body;

    if (orderID) {
      const existingOrder = await orderModel.findOne({
        orderID: orderID,
        status: "PENDING",
        userId: req.user._id,
      });
      if (existingOrder) {
        existingOrder.paymentID = paymentID;
        existingOrder.status = "FAILED";
        await existingOrder.save();

        res.status(201).json({ success: true, message: "Payment Failed" });
      } else {
        throw new Error("Order doesnt exist");
      }
    } else {
      throw new Error("Razorpay server issue");
    }
  } catch (error) {
    console.log(error);
    res.status(403).json({ success: false, message: "Something went wrong" });
  }
};
