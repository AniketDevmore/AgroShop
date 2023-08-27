const express = require("express");
const {
  getUserDataById,
  getProduct,
  getProductData,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  deleteFromCart,
} = require("../controller/userController");
const router = express.Router();

router.get("/getUserDataById/:id", getUserDataById);
router.get("/getProduct/:type", getProduct);
router.get("/getProductData/:id", getProductData);
router.post("/addToWishlist/:id", addToWishlist);
router.post("/addToCart/:id", addToCart);
router.delete("/deleteFromWishlist/:id", deleteFromWishlist);
router.delete("/deleteFromCart/:id", deleteFromCart);

module.exports = router;
