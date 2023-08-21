const User = require("./Schemas/User");
const Product = require("./Schemas/Product");
const { v4: uuidv4 } = require("uuid");

const createNewUser = (userData) => {
  // console.log(userData);
  return new Promise((res, rej) => {
    User.findOne({ email: userData.email })
      .then((user) => {
        if (user) {
          rej("User Already Exist!");
        } else {
          let newUser = new User(userData);
          newUser.id = uuidv4();
          res(newUser.save());
        }
      })
      .catch((err) => {
        rej(err);
      });
  });
};

const getUserByEmail = (email) => {
  return User.findOne({ email: email });
};

const getUserById = (id) => {
  return User.findOne({ id: id });
};

const getPro = (type) => {
  return Product.find({ catogary: type });
};

const getproductById = (id) => {
  return Product.find({ id: id });
};

const addCart = (userId, data) => {
  return new Promise((res, rej) => {
    User.findOne({ id: userId })
      .then((user) => {
        if (user) {
          let existing = false;
          if (user.cart.length > 0) {
            existing = user.cart.find((ele) => ele.id == data.id);
          } else {
            user.cart.push(data);
          }
          // console.log(existing);

          if (existing) {
            rej("Cart already has the iteam!");
          } else {
            user.cart.push(data);
          }

          // console.log(user);
          res(user.save());
        } else {
          rej("User Not Find!");
        }
      })
      .catch((err) => {
        rej(err);
      });
  });
};

const addWishlist = (userId, data) => {
  return new Promise((res, rej) => {
    User.findOne({ id: userId })
      .then((user) => {
        if (user) {
          let existing = false;
          if (user.wishlist.length > 0) {
            existing = user.wishlist.find((ele) => ele.id == data.id);
          } else {
            user.wishlist.push(data);
          }
          // console.log(existing);

          if (existing) {
            rej("Wishlist already has the iteam!");
          } else {
            user.wishlist.push(data);
          }

          res(user.save());
        } else {
          rej("User Not Find!");
        }
      })
      .catch((err) => {
        rej(err);
      });
  });
};
module.exports = {
  createNewUser,
  getUserByEmail,
  getUserById,
  getPro,
  getproductById,
  addCart,
  addWishlist,
};
