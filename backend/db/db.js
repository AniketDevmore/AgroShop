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

module.exports = {
  createNewUser,
  getUserByEmail,
  getUserById,
  getPro,
  getproductById,
};
