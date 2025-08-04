import mongoose from "mongoose";

const websiteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  website: { type: String, required: true },
  description: { type: String },
});

const Websites = mongoose.model("Websites", websiteSchema);

export default Websites;
