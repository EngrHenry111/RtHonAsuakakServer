import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
  title: String,
  year: String,
  description: String,
}, { timestamps: true });

export default mongoose.model("Achievement", achievementSchema);