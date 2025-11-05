import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;

      const res = await axios.get(`http://localhost:5000/api/bookings/user/${user._id}`);
      setBookings(res.data);
    };
    fetchBookings();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Booking History</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul className="list-group">
          {bookings.map((b) => (
            <li key={b._id} className="list-group-item">
              <b>{b.propertyName}</b> - ₹{b.price} <br />
              Date: {new Date(b.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;
