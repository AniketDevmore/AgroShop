const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  confirm: String,
  age: Number,
  type: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
