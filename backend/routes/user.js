const express = require("express");
const { getUserDataById } = require("../controller/userController");
const router = express.Router();

router.get("/getUserDataById/:id", getUserDataById);

module.exports = router;
