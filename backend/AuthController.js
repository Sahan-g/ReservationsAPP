const {user} = require("./models/models.js");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password,firstname,lastname } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const userN = await user.create({ email, password, lastname, firstname });
    const token = createSecretToken(userN._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, userN });
    next();
  } catch (error) {
    console.error(error);
  }
};