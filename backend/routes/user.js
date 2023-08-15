const express = require("express");
const { getUserDataById, getProduct,getProductData } = require("../controller/userController");
const router = express.Router();

router.get("/getUserDataById/:id", getUserDataById);
router.get("/getProduct/:type", getProduct);
router.get("/getProductData/:id", getProductData);

module.exports = router;
