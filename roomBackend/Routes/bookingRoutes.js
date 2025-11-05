import express from "express";
import Booking from "../Models/Booking.js";

const router = express.Router();

/* ✅ Create a new booking (Book Now button) */
// POST /api/bookings/book
router.post("/book", async (req, res) => {
  try {
    const { userId, propertyId, propertyName, price } = req.body;

    // Create booking record
    const booking = new Booking({
      userId,
      propertyId,
      propertyName,
      price,
    });
    await booking.save();

    // ✅ Mark property as booked and save student info
    const property = await Property.findById(propertyId);
    if (property) {
      property.booked = true;
      property.bookedBy = userId; // 👈 Add this field in Property model
      await property.save();
    }

    res.json({ message: "Property booked successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Booking failed!" });
  }
});
// DELETE /api/bookings/unbook/:propertyId
router.delete("/unbook/:propertyId", async (req, res) => {
  try {
    const property = await Property.findById(req.params.propertyId);
    if (!property) return res.status(404).json({ message: "Property not found" });

    property.booked = false;
    property.bookedBy = null;
    await property.save();

    await Booking.deleteOne({ propertyId: req.params.propertyId });

    res.json({ message: "Property unbooked successfully" });
  } catch (err) {
    res.status(500).json({ message: "Unbooking failed" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { propertyId, studentId, ownerId } = req.body;

    // Create new booking
    const booking = new Booking({ propertyId, studentId, ownerId });
    await booking.save();

    // Update property as booked
    await Property.findByIdAndUpdate(propertyId, { status: "booked" });

    res.status(201).json({ message: "Booking successful", booking });
  } catch (error) {
    res.status(500).json({ message: "Booking failed", error });
  }
});

// ✅ Owner gets all bookings for their properties
router.get("/owner/:ownerId", async (req, res) => {
  try {
    const bookings = await Booking.find({ ownerId: req.params.ownerId })
      .populate("propertyId")
      .populate("studentId", "name email phone"); // only these fields

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bookings", err });
  }
});
/* ✅ Cancel a booking (Unbook button) */
router.delete("/unbook/:propertyId", async (req, res) => {
  try {
    const { propertyId } = req.params;

    const deletedBooking = await Booking.findOneAndDelete({ propertyId });
    if (!deletedBooking) {
      return res.status(404).json({ message: "No booking found for this property" });
    }

    res.json({ message: "✅ Property is unbooked successfully!" });
  } catch (err) {
    console.error("❌ Unbooking Error:", err);
    res.status(500).json({ message: "Server error while unbooking property" });
  }
});

/* ✅ Get all bookings (optional - for admin or testing) */
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("propertyId userId");
    res.json(bookings);
  } catch (err) {
    console.error("❌ Error fetching bookings:", err);
    res.status(500).json({ message: "Server error while fetching bookings" });
  }
});

export default router;
