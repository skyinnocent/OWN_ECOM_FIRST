const ADMIN = require("../models/adminModel");
const bcrypt = require("bcrypt");

const adminController = {
  createAdmin: async (req, res, next) => {
    const { name, email, password } = req.body;
    let newAdmin;
    try {
      newAdmin = await ADMIN.create({ name, email, password });
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        console.log("email already exists");
        res
          .status(409)
          .json({ message: "Email exists! Please use a different email" });
      }
      res.status(200).json({ message: "something went wrong" });
    }
    res.status(200).json(newAdmin);
  },
  findAdmin: async (req, res, next) => {
    const _id = req.params.id;
    let admin;
    try {
      admin = await ADMIN.findById(_id);
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: "something went wrong" });
    }
    res.status(200).json(admin);
  },
  updateAdmin: async (req, res, next) => {
    const _id = req.params.id;
    const { name, email, password } = req.body;
    let admin;
    try {
      admin = await ADMIN.findById(_id);
      const existingPassword = admin.password;
      const comapredResult = bcrypt.compare(password, existingPassword);
      if (comapredResult) {
        if (name) {
          admin.name = name;
        }
        if (email) {
          admin.email = email;
        }
        if (password) {
          admin.password = password;
        }
        await admin.save();
      }
      if (!comapredResult) {
        res.status(400).json({ message: "password did not match" });
      }
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: "admin not found" });
    }
    res.status(200).json(admin);
  },
  deleteAdmin: async (req, res, next) => {
    const _id = req.params.id;
    try {
      await ADMIN.findByIdAndDelete(_id);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Something went worng" });
    }
    // since the 204 code does not allow delivering of any json we are simply ending the response.
    res.status(204).end();
  },
  // CREATE THE BELOW CONTROLLERS AS WELL:
  // GET STATS: STAT's for TOTAL (in cart, in whishlist, in transit, sold, total listed products, total active, total inactive, total amount of sales made)
  // get active sellers list
  // get suspended sellers list
  // suspend seller
  // suspend customer
  // suspend product
};

module.exports = { adminController };
