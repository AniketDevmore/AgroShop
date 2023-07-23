const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  id: String,
  description: String,
  price: [Number],
  company: String,
  stock: Boolean,
  img: [String],
  quantity: [Number],
  catogary: String,
  product: String,
});

const Product = mongoose.model("Admin", productSchema);

module.exports = Product;
