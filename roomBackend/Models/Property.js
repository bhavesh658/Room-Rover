// models/Property.js
import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rent: { type: Number, required: true },
  image: { type: String },
  type: { type: String },

  // Reference to the Owner (User who uploaded the property)
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  // Whether the property is booked or not
  booked: { type: Boolean, default: false },

  // The student who booked this property
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
}, { timestamps: true });

export default mongoose.model("Property", propertySchema);
