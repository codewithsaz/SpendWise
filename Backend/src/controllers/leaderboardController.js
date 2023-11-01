const UserModel = require("../models/userModel");

exports.getLeaderboard = async (req, res) => {
  const pageNumber = Math.floor(Number.parseInt(req.query.page));
  const pageSize = Math.floor(Number.parseInt(req.query.size));
  try {
    const skip = (pageNumber - 1) * pageSize;
    const query = UserModel.find({}, "name savings")
      .sort({ savings: -1 })
      .skip(skip)
      .limit(pageSize);
    const totalUsers = await UserModel.countDocuments();

    const leaderboard = await query.exec();
    if (leaderboard) {
      res.status(201).json({
        success: true,
        totalUsers: totalUsers,
        currentPage: pageNumber,
        totalPages: Math.ceil(totalUsers / pageSize),
        leaderboard: leaderboard,
      });
    } else throw new Error("Cant fetch the leaderboard now!");
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};
