const productController = {
  createProduct: async (req, res, next) => {
    console.log("Product is created");
  },
  findProduct: async (req, res, next) => {
    console.log("The Product details are: ");
  },
  updateProduct: async (req, res, next) => {
    console.log("The is updated ");
  },
  deleteProduct: async (req, res, next) => {
    console.log("The Product is deleted ");
  },
};

module.exports = { productController };
