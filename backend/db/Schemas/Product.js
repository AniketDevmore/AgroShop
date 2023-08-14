const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  id: String,
  description: String,
  details: [Object],
  company: String,
  img: [String],
  content: String,
  unit: String,
  catogary: String,
});

const Product = mongoose.model("Admin", productSchema);

module.exports = Product;
