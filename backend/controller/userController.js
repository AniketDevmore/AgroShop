const {
  getUserById,
  getPro,
  getproductById,
  addWishlist,
  addCart,
  deleteWishlist,
  deleteCart,
  addQty,
  reduceQty,
} = require("../db/db");

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

const getProductData = (req, res, next) => {
  getproductById(req.params.id)
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

const addToWishlist = (req, res, next) => {
  // console.log(req.body, req.params.id);
  addWishlist(req.params.id, req.body)
    .then((userData) => {
      // console.log(userData);
      res.json({
        status: "Product Successfully Added to Wishlist",
      });
    })
    .catch((err) => {
      next(err);
    });
};

const addToCart = (req, res, next) => {
  // console.log(req.body, req.params.id);
  addCart(req.params.id, req.body)
    .then((userData) => {
      // console.log(userData);
      res.json({
        status: "Product Successfully Added to Cart",
      });
    })
    .catch((err) => {
      next(err);
    });
};

const deleteFromWishlist = (req, res, next) => {
  // console.log(req.params.id, req.body.id);
  deleteWishlist(req.params.id, req.body.id)
    .then((userData) => {
      // console.log(userData);
      res.json({
        status: "Product Successfully Removed from Wishlist",
      });
    })
    .catch((err) => {
      next(err);
    });
};

const deleteFromCart = (req, res, next) => {
  // console.log(req.params.id, req.body.id);
  deleteCart(req.params.id, req.body.id)
    .then((userData) => {
      // console.log(userData);
      res.json({
        status: "Product Successfully Removed from Cart",
      });
    })
    .catch((err) => {
      next(err);
    });
};

const addQtyOfProduct = (req, res, next) => {
  // console.log(req.params.id, req.body);
  addQty(req.params.id, req.body.id)
    .then((userData) => {
      // console.log(userData);
      res.json({
        status: "Product Successfully added",
      });
    })
    .catch((err) => {
      next(err);
    });
};
const reduceQtyOfProduct = (req, res, next) => {
  reduceQty(req.params.id, req.body.id)
    .then((userData) => {
      // console.log(userData);
      res.json({
        status: "Product Successfully removed",
      });
    })
    .catch((err) => {
      next(err);
    });
};
module.exports = {
  getUserDataById,
  getProduct,
  getProductData,
  addToWishlist,
  addToCart,
  deleteFromWishlist,
  deleteFromCart,
  addQtyOfProduct,
  reduceQtyOfProduct,
};
