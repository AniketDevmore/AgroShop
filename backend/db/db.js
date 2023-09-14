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
          let existing = user.cart.find(
            (ele) => ele.id === data.id && ele.pack === data.pack
          );
          // console.log(existing);

          if (!existing) {
            user.cart.push(data);
          } else {
            rej("Cart already has this iteam!");
          }

          // console.log(user);
          res(user.save());
        } else {
          rej("User Not Found!");
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
          let existing = user.wishlist.find(
            (ele) => ele.id === data.id && ele.pack === data.pack
          );
          // console.log(existing);

          if (!existing) {
            user.wishlist.push(data);
          } else {
            rej("Wishlist already has this iteam!");
          }

          res(user.save());
        } else {
          rej("User Not Found!");
        }
      })
      .catch((err) => {
        rej(err);
      });
  });
};

const deleteWishlist = (userId, product) => {
  return new Promise((res, rej) => {
    User.findOne({ id: userId })
      .then((user) => {
        if (user) {
          let searchedData = user.wishlist.find(
            (ele) => ele.id === product.id && ele.pack === product.pack
          );
          let index = user.wishlist.indexOf(searchedData);

          user.wishlist.splice(index, 1);
          res(user.save());
        } else {
          rej("Data Not Find!");
        }
      })
      .catch((err) => {
        rej(err);
      });
  });
};

const deleteCart = (userId, product) => {
  return new Promise((res, rej) => {
    User.findOne({ id: userId })
      .then((user) => {
        if (user) {
          let searchedData = user.cart.find(
            (ele) => ele.id === product.id && ele.pack === product.pack
          );

          let index = user.cart.indexOf(searchedData);
          user.cart.splice(index, 1);
          res(user.save());
        } else {
          rej("Data Not Find!");
        }
      })
      .catch((err) => {
        rej(err);
      });
  });
};

const addQty = (userId, product) => {
  return new Promise((res, rej) => {
    User.findOne({ id: userId })
      .then((user) => {
        if (user) {
          let searchedData = user.cart.find(
            (ele) => ele.id === product.id && ele.pack === product.pack
          );
          let index = user.cart.indexOf(searchedData);
          searchedData.quantity += 1;
          user.cart.splice(index, 1);
          user.cart.splice(index, 0, searchedData);
          res(user.save());
        } else {
          rej("Data Not Find!");
        }
      })
      .catch((err) => {
        rej(err);
      });
  });
};
const reduceQty = (userId, product) => {
  return new Promise((res, rej) => {
    User.findOne({ id: userId })
      .then((user) => {
        if (user) {
          let searchedData = user.cart.find(
            (ele) => ele.id === product.id && ele.pack === product.pack
          );
          let index = user.cart.indexOf(searchedData);
          searchedData.quantity -= 1;
          user.cart.splice(index, 1);

          if (searchedData.quantity >= 1) {
            user.cart.splice(index, 0, searchedData);
          }

          res(user.save());
        } else {
          rej("Data Not Find!");
        }
      })
      .catch((err) => {
        rej(err);
      });
  });
};

const addOrder = (userId, userData) => {
  // console.log(111, userData, userId);
  return new Promise((res, rej) => {
    User.findOne({ id: userId })
      .then((user) => {
        // console.log(user);
        user.cart.forEach((ele) => {
          user.order.push(ele);
        });
        user.cart = [];
        res(user.save());
      })
      .catch((err) => {
        rej(err);
      });
  });
};

const getUserOrders = (userId) => {
  return User.findOne({ id: userId });
};
module.exports = {
  createNewUser,
  getUserByEmail,
  getUserById,
  getPro,
  getproductById,
  addCart,
  addWishlist,
  deleteWishlist,
  deleteCart,
  addQty,
  reduceQty,
  addOrder,
  getUserOrders,
};
