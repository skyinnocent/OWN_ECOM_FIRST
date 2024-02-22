const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: {
    type: String,
  },
  ratings: {
    type: Number,
  },
  for: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  category: [
    "DBZ",
    "NARUTO",
    "ONE-PIECE",
    "AOT",
    "JUJUTSU-KAISEN",
    "DEMON-SLAYER",
    "POKEMON",
    "BEY-BLADE",
  ],
  //This will be so that if a product is getting deactivated it must be first out of all order period. By order period I mean a 7 days time frame till order is delivered
  currentlyInOrderPeriod: {},
  discounts: {},
  seller: {},
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
