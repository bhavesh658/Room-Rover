// routes/bookingRoutes.js
import express from "express";
import Booking from "../models/Booking.js";
import Property from "../models/Property.js";

const router = express.Router();

// ✅ Book a property
router.post("/book", async (req, res) => {
  try {
    const { userId, propertyId, propertyName, price } = req.body;
    console.log("📦 Booking Request:", req.body);

    // Validate required fields
    if (!userId || !propertyId || !propertyName || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if property exists
    const property = await Property.findById(propertyId);
    if (!property) return res.status(404).json({ message: "Property not found" });

    // Check if already booked in DB (not just flag)
    const alreadyBooked = await Booking.findOne({ propertyId });
    if (alreadyBooked) {
      return res.status(400).json({ message: "This property is already booked!" });
    }

    // Create booking entry
    const newBooking = new Booking({
      userId,
      propertyId,
      propertyName,
      price,
    });
    await newBooking.save();

    // Mark property as booked
    property.booked = true;
    await property.save();

    console.log("✅ Booking saved:", newBooking);
    res.status(201).json({ message: "✅ Room successfully booked!", booking: newBooking });
  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({ message: "Booking failed", error: error.message });
  }
});

// ✅ Fetch all bookings for a user
router.get("/user/:userId", async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId })
      .populate("propertyId");
    res.json(bookings);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
});

export default router;
