import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  name: String,
  location: String,
  rent: Number,
  image: String,
  type: String,
  owner: String,
  booked: { type: Boolean, default: false } // ✅ add this field
});

export default mongoose.model("Property", propertySchema);
