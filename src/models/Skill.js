import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: String,
  level: String, // Beginner | Intermediate | Expert
}, { timestamps: true });

export default mongoose.model("Skill", skillSchema); 