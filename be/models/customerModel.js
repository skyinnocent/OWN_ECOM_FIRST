const mongoose = require("mongoose");
const { isValidEmail, isValidPassword } = require("../utils/validators");
const customerSchema = new mongoose.Schema({
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
  shippingAddress: {
    type: String,
  },
  phone: {
    type: String,
    maxlength: 14,
    minlength: 14,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  cart: {
    type: String,
  },
  wishList: {
    type: String,
  },
  orderPlaced: {
    type: String,
  },
  returns: {
    type: String,
  },
  payments: {
    type: String,
  },
  isSuspended: Boolean,
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
