import { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [message, setMessage] = useState("");

  // ✅ Memoized fetch function
  const fetchProperty = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/properties/details/${id}`);
      setProperty(res.data);
      setMessage("Property loaded successfully ✅");
    } catch (err) {
      console.error("Error fetching property:", err);
      setMessage("Failed to load property ❌");
    }
  }, [id]);

  useEffect(() => {
    fetchProperty();
  }, [fetchProperty]); // ✅ dependency fixed

  const handleBook = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please log in first!");
      return;
    }

    const bookingData = {
      userId: user._id || user.id,
      propertyId: property._id,
      propertyName: property.name,
      price: property.rent,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/bookings/book", bookingData);
      alert(res.data.message);
      setProperty({ ...property, booked: true });
      setMessage("✅ Booking confirmed!");
    } catch (err) {
      console.error("Booking failed:", err);
      setMessage("❌ Booking failed!");
    }
  };

  if (!property) return <h2 className="text-center mt-5">Loading property details...</h2>;

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4">
        <img
          src={property.image}
          alt={property.name}
          className="img-fluid rounded mb-4"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <h2 className="text-warning fw-bold mb-3">{property.name}</h2>
        <p><strong>📍 Location:</strong> {property.location}</p>
        <p><strong>💰 Rent:</strong> ₹{property.rent}/month</p>
        <p><strong>👤 Owner:</strong> {property.owner}</p>
        <p><strong>🏠 Type:</strong> {property.type}</p>

        <button
          onClick={handleBook}
          disabled={property.booked}
          className={`btn ${property.booked ? "btn-secondary" : "btn-success"} mt-3`}
        >
          {property.booked ? "Already Booked" : "Book Now"}
        </button>

        {message && <p className="mt-3 text-info">{message}</p>}

        <Link to="/Hero" className="btn btn-dark mt-3 ms-3">
          ← Back to Properties
        </Link>
      </div>
    </div>
  );
};

export default PropertyDetails;
