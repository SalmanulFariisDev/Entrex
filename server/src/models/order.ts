import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  device: { type: mongoose.Schema.Types.ObjectId, ref: "Device", required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  price: Number,
  status: {
    type: String,
    enum: ["pending", "confirmed", "picked-up", "delivered", "cancelled"],
    default: "pending"
  },
  pickupDate: Date,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
