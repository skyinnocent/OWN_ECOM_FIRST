const sellerController = {
  createSeller: async (req, res, next) => {
    console.log("seller is created");
  },
  findSeller: async (req, res, next) => {
    console.log("The seller details are: ");
  },
  updateSeller: async (req, res, next) => {
    console.log("The is updated ");
  },
  deleteSeller: async (req, res, next) => {
    console.log("The seller is deleted ");
  },
};

module.exports = { sellerController };
