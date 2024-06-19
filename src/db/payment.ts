
import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  order_id: { type: Number, required: true },
  payment_methord: { type: String, required: true },
  amount: { type: Number, required: true },
  payment_status: { type: String, required: true },
  transaction_id: { type: String, required: true },
  payment_date: { type: Number, required: true },
  description: { type: String, required: true },
})

export const PaymentModel = mongoose.model("Payment", PaymentSchema);

export const getPayment = () => PaymentModel.find();
