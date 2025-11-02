import { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import sampleData from "../Data";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [message, setMessage] = useState("");

  // ✅ Fetch property with live booking status

  useEffect(() => {
    setProperty(sampleData.find((prop) => prop.id.toString() === id));
  }, [id]);

  // ✅ Handle booking
  const handleBook = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please log in first!");
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const bookingData = {
      userId: storedUser.email,
      propertyId: property.id,
      propertyName: property.name,
      price: property.rent,
    };
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    alert("✅ Property booked successfully!");
    setProperty({ ...property, booked: true });
    setMessage("✅ Property booked successfully!");

    // try {
    //   const res = await axios.post(
    //     "http://localhost:5000/api/bookings/book",
    //     bookingData
    //   );
    //   alert(res.data.message);
    //   setProperty({ ...property, booked: true });
    //   setMessage("✅ Property booked successfully!");
    // } catch (err) {
    //   console.error("❌ Booking failed:", err);
    //   alert(err.response?.data?.message || "Booking failed!");
    // }
  };

  // ✅ Handle unbooking
  const handleUnbook = async () => {
    localStorage.removeItem("bookingData");
    alert("✅ Property is now unbooked!");
    setProperty({ ...property, booked: false });
    setMessage("");
    // setMessage("✅ Property is now unbooked!");

    // try {
    //   const res = await axios.delete(
    //     `http://localhost:5000/api/bookings/unbook/${property._id}`
    //   );
    //   alert(res.data.message);
    //   setProperty({ ...property, booked: false });
    //   setMessage("✅ Property is now unbooked!");
    // } catch (err) {
    //   console.error("❌ Unbooking failed:", err);
    //   alert(err.response?.data?.message || "Unbooking failed!");
    // }
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

        <h2 className="text-warning font-bold text-3xl mb-3">
          {property.name}
        </h2>
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
        {/* <Link to="/BookingPage" className="w-full">
          <button className="btn btn-success mt-3">Book Now</button>
        </Link> */}

        {!property?.booked ? (
          <button onClick={handleBook} className="btn btn-success mt-3">
            Book Now
          </button>
        ) : (
          <button onClick={handleUnbook} className="btn btn-danger mt-3">
            Unbook
          </button>
        )}

        {message && <p className="mt-3 text-info">{message}</p>}

        <Link to="/" className="btn btn-dark mt-3 ms-3">
          ← Back to Properties
        </Link>
      </div>
    </div>
  );
};

export default PropertyDetails;
