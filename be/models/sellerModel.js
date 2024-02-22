const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  //Once a product is created it will be added here once deleted it will be removed form here as well
  ListedProducts: {
    type: String,
  },
  // Note the affects of issuspended will take place on products as well so I have to calculate that as well
  state: {
    type: String,
    category: ["suspended", "active", "pendingActivation"],
    default: "active",
  },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
