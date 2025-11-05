// models/Property.js
import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  name: String,
  location: String,
  rent: Number,
  image: String,
  type: String,
  owner: String,
   ownerId: {                  // reference to owner user
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false
  },
  bookedBy: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User", // Assuming User model exists for students
  default: null,
},
  booked: { type: Boolean, default: false }
});

export default mongoose.model("Property", propertySchema);
