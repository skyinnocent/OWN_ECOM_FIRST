const express = require("express");
const router = express.Router();
const { adminController } = require("./../controllers/adminController");
const { sellerController } = require("./../controllers/sellerController");
const { customerController } = require("./../controllers/customerController");
const { productController } = require("./../controllers/productController");

// ADMIN RELATED ROUTES
router.post("/api/v1/admin", adminController.createAdmin);
router
  .route("/api/v1/admin/:id")
  .get(adminController.findAdmin)
  .put(adminController.updateAdmin)
  .delete(adminController.deleteAdmin);

// SELLER RELATED ROUTES
router.post("/api/v1/admin", sellerController.createSeller);
router
  .route("/api/v1/admin/:id")
  .get(sellerController.findSeller)
  .put(sellerController.updateSeller)
  .delete(sellerController.deleteSeller);

// PRODUCT RELATED ROUTES
router.post("/api/v1/admin", productController.createProduct);
router
  .route("/api/v1/admin/:id")
  .get(productController.findProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

// CUSTOMER RELATED ROUTES
router.post("/api/v1/admin", customerController.createCustomer);
router
  .route("/api/v1/admin/:id")
  .get(customerController.findCustomer)
  .put(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

module.exports = { router };
