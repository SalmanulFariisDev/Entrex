import mongoose from "mongoose";

const pricingSchema = new mongoose.Schema({
  brand: String,
  model: String,
  type: String,
  basePrice: Number,
  conditionMultipliers: {
    excellent: Number,
    good: Number,
    average: Number,
    poor: Number
  },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Pricing", pricingSchema);
