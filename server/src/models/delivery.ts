import mongoose from "mongoose";

const pickupSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  pickupAddress: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    pincode: String
  },
  deliveryAddress: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    pincode: String
  },
  pickupTimeSlot: String,
  deliveryTimeSlot: String,
  assignedAgent: { type: String },
  status: {
    type: String,
    enum: ["scheduled", "in-transit", "completed", "failed"],
    default: "scheduled"
  }
});

export default mongoose.model("Pickup", pickupSchema);
