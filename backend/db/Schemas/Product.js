const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  id: String,
  description: String,
  price: Object,
  company: String,
  stock: Boolean,
  img: [String],
  quantity: Object,
  catogary: String,
  product: String,
});

const Product = mongoose.model("Admin", productSchema);

module.exports = Product;
