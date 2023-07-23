const express = require("express");
const { createUser, login } = require("../controller/authController");
const { encryptPassword, checkPassword } = require("../middleware/middleware");
const router = express.Router();

router.post("/createUser", encryptPassword, createUser);
router.post("/login", checkPassword, login);

module.exports = router;
