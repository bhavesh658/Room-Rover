import { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import API_URL from "../apiPoint";
import { useNavigate } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Fetch property with live booking status
  const fetchProperty = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/api/properties/details/${id}`);
      setProperty(res.data);
    } catch (err) {
      console.error("❌ Error fetching property:", err);
    }
  }, [id]);

  useEffect(() => {
    fetchProperty();
  }, [fetchProperty]);

  // ✅ Handle booking
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
      const res = await axios.post(API_URL + "/api/bookings/book", bookingData);
      alert(res.data.message);
      setProperty({ ...property, booked: true });

      setMessage("✅ Property booked successfully!");
      navigate("/BookingPage");
    } catch (err) {
      console.error("❌ Booking failed:", err);
      alert(err.response?.data?.message || "Booking failed!");
    }
  };

  // ✅ Handle unbooking
  const handleUnbook = async () => {
    try {
      const res = await axios.delete(
        `${API_URL}/api/bookings/unbook/${property._id}`
      );
      alert(res.data.message);
      setProperty({ ...property, booked: false });
      setMessage("✅ Property is now unbooked!");
    } catch (err) {
      console.error("❌ Unbooking failed:", err);
      alert(err.response?.data?.message || "Unbooking failed!");
    }
  };

  if (!property)
    return <h2 className="text-center mt-5">Loading property details...</h2>;

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
        <p>
          <strong>📍 Location:</strong> {property.location}
        </p>
        <p>
          <strong>💰 Rent:</strong> ₹{property.rent}/month
        </p>
        <p>
          <strong>👤 Owner:</strong> {property.owner}
        </p>
        <p>
          <strong>🏠 Type:</strong> {property.type}
        </p>

        {!property.booked ? (
          <button onClick={handleBook} className="btn btn-success mt-3">
            Book Now
          </button>
        ) : (
          <button onClick={handleUnbook} className="btn btn-danger mt-3">
            Unbook
          </button>
        )}

        {message && <p className="mt-3 text-info">{message}</p>}

        <Link to="/Hero" className="btn btn-dark mt-3 ms-3">
          ← Back to Properties
        </Link>
      </div>
    </div>
  );
};

export default PropertyDetails;
