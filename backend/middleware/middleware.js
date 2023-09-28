const bcrypt = require("bcrypt");
const { getUserByEmail } = require("../db/db");
const jwt = require("jsonwebtoken");

const errMiddleware = (err, req, res, next) => {
  res.json({
    status: "Failed",
    message: err.toString(),
  });
};

const encryptPassword = (req, res, next) => {
  const saltRound = 10;
  bcrypt.hash(req.body.password, saltRound, (err, hash) => {
    req.body.password = hash;
    req.body.confirm = hash;
    next();
  });
};

const checkPassword = (req, res, next) => {
  // console.log(req.body, "middle");
  getUserByEmail(req.body.email)
    .then((user) => {
      // console.log(user);
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        // console.log(result);
        if (!result) {
          next(new Error("Please Enter Valid Email or Password"));
        } else {
          next();
        }
      });
    })
    .catch((err) => {
      next(err);
    });
};

const checkAutherization = (req, res, next) => {
  // console.log(req.headers);
  const authToken = req.headers.token;
  if (authToken) {
    jwt.verify(authToken, process.env.JWTKEY, function (err, decoded) {
      if (!err) {
        next();
      } else {
        res.status(401).json({
          status: "Failed",
          message: "JWT Malformed..",
        });
      }
    });
  } else {
    res.status(401).json({
      status: "Failed",
      message: "Authorization requires",
    });
  }
};

module.exports = {
  errMiddleware,
  encryptPassword,
  checkPassword,
  checkAutherization,
};
