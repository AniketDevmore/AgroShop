const jwt = require("jsonwebtoken");
const { createNewUser, getUserByEmail } = require("../db/db");

const createUser = (req, res, next) => {
  // console.log(req.body);
  createNewUser(req.body)
    .then((data) => {
      res.json({
        status: "Success",
        message: "User Created Successfully!",
      });
    })
    .catch((err) => {
      next(err);
    });
};

const login = (req, res, next) => {
  getUserByEmail(req.body.email)
    .then((result) => {
      const token = jwt.sign({ email: req.body.email }, process.env.JWTKEY);
      res.json({
        status: "Success",
        data: result,
        token: token,
      });
    })
    .catch((err) => {
      next(new Error("Please Enter Valid Email or Password!"));
    });
};

module.exports = {
  createUser,
  login,
};
