const { addNewProduct } = require("../db/adminDb");

const addProduct = (req, res, next) => {
  addNewProduct(req.body)
    .then((data) => {
      res.json({
        status: "Success",
        message: "Product added successfully",
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  addProduct,
};
