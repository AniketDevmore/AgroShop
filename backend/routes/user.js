const express = require("express");
const { getUserDataById, getProduct } = require("../controller/userController");
const router = express.Router();

router.get("/getUserDataById/:id", getUserDataById);
router.get("/getProduct/:type", getProduct);

module.exports = router;
