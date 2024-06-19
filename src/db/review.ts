
import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  product_id: { type: String, required: true },
  user_id: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
})

export const ReviewModel = mongoose.model("Review", ReviewSchema);

export const getReviews = () => ReviewModel.find();
