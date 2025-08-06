import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, enum: ["phone", "laptop", "tablet", "other"], required: true },
  specifications: {
    ram: String,
    storage: String,
    processor: String,
    os: String
  },
  condition: {
    type: String,
    enum: ["excellent", "good", "average", "poor"],
    required: true
  },
  images: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  listed: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Device", deviceSchema);
