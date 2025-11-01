// routes/bookingRoutes.js
import express from "express";
import Booking from "../Models/Booking.js";
import Property from "../models/Property.js";

const router = express.Router();

// 🏠 Book a property
router.post("/book", async (req, res) => {
  try {
    const { userId, propertyId, propertyName, price } = req.body;
    console.log("📦 Booking Request:", req.body); // <-- Add this line

    if (!userId || !propertyId || !propertyName || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if the property is already booked by someone
    const existingBooking = await Booking.findOne({ propertyId });
    if (existingBooking) {
      return res.status(400).json({ message: "This property is already booked!" });
    }

    // Save booking info
    const newBooking = new Booking({ userId, propertyId, propertyName, price });
    await newBooking.save();

    // Mark property as booked
    await Property.findByIdAndUpdate(propertyId, { booked: true });

    res.status(201).json({ message: "✅ Room successfully booked!" });
  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({ message: "Booking failed", error: error.message });
  }
});

// 👤 Get all bookings by user
router.get("/user/:userId", async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId }).populate("propertyId");
    res.json(bookings);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ message: "Failed to fetch booking history" });
  }
});

export default router;
