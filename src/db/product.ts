import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: Number, required: true },
  category_id: { type: String, required: true },
  brand: { type: String, required: true },
  image: [{ type: String }],
})

export const ProductModel = mongoose.model("Product", ProductSchema);

export const getProducts = () => ProductModel.find();
