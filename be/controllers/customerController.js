const customerController = {
  createCustomer: async (req, res, next) => {
    console.log("Customer is created");
  },
  findCustomer: async (req, res, next) => {
    console.log("The Customer details are: ");
  },
  updateCustomer: async (req, res, next) => {
    console.log("The is updated ");
  },
  deleteCustomer: async (req, res, next) => {
    console.log("The Customer is deleted ");
  },
};

module.exports = { customerController };
