const Product = require("./Schemas/Product");

const addNewProduct = (data) => {
  return new Promise((res, rej) => {
    Product.findOne({ id: data.id })
      .then((productData) => {
        if (productData) {
          rej("Product already exist!");
        } else {
          let newProduct = new Product(data);
          res(newProduct.save());
        }
      })
      .catch((err) => {
        rej(err);
      });
  });
};

module.exports = {
  addNewProduct,
};
