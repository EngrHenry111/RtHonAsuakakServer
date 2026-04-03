import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  school: String,
  degree: String,
  startYear: String,
  endYear: String,
}, { timestamps: true });

export default mongoose.model("Education", educationSchema);