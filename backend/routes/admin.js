const express = require("express");
const { addProduct } = require("../controller/adminController");
const router = express.Router();

router.post("/addProduct", addProduct);

module.exports = router;
