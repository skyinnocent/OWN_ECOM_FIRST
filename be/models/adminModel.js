const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isValidEmail, isValidPassword } = require("../utils/validators");
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 12,
  },
  email: {
    unique: true,
    type: String,
    required: true,
    maxlength: 30,
    validate: {
      validator: isValidEmail,
      message: "Email is not valid",
    },
  },
  password: {
    type: String,
    maxlength: 15,
    minlength: 8,
    validate: {
      validator: isValidPassword,
      message: "Password must be as per the rules",
    },
  },
});

adminSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  } catch (error) {
    return next(error);
  }
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
