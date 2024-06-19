

import { timeStamp } from "console";
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  order_status: { type: String, required: true },
  order_data: { type: timeStamp(), required: true },
  shipping_address: {
    "street": { type: String, required: true },
    "city": { type: String, required: true },
    "state": { type: String, required: true },
    "zip_code": { type: String, required: true },
    "country": { type: String, required: true },
  },
  billing_address: {

    "street": { type: String, required: true },
    "city": { type: String, required: true },
    "state": { type: String, required: true },
    "zip_code": { type: String, required: true },
    "country": { type: String, required: true },

  },
  total_amount: { type: Number, required: true },
  payment_status: { type: String },
  items: [{
    "product_id": Number,
    "quantity": Number,
    "price": Number
  }]
})

export const OrderModel = mongoose.model("Order", OrderSchema);

export const getReviews = () => OrderModel.find();
