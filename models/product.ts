import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  categories: [String],
  reference: String,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
