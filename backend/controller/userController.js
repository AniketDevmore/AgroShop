const { getUserById, getPro } = require("../db/db");

const getUserDataById = (req, res, next) => {
  // console.log(req.params.id);
  getUserById(req.params.id)
    .then((user) => {
      res.json({
        status: "Success",
        data: user,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getProduct = (req, res, next) => {
  // console.log(req.params.type);
  getPro(req.params.type)
    .then((data) => {
      res.json({
        status: "Success",
        data: data,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getUserDataById,
  getProduct,
};
