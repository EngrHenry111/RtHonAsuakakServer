import mongoose from "mongoose";

const achievementsSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

export default mongoose.model("Achievements", achievementsSchema);