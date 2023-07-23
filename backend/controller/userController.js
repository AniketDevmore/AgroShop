const { getUserById } = require("../db/db");

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

module.exports = {
  getUserDataById,
};
