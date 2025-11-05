import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const Profile = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Example: Fetch booking history from localStorage or API
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.email) {
      // Simulate fetch (replace with actual API call)
      const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      const userBookings = storedBookings.filter(
        booking => booking.userEmail === userData.email
      );
      setBookings(userBookings);
    }
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">My Booking History</h2>

      {bookings.length > 0 ? (
        <Table bordered hover responsive className="shadow-sm">
          <thead className="bg-warning text-dark">
            <tr>
              <th>#</th>
              <th>Property Name</th>
              <th>Location</th>
              <th>Rent</th>
              <th>Booking Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{booking.propertyName}</td>
                <td>{booking.location}</td>
                <td>₹{booking.rent}</td>
                <td>{booking.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="text-center mt-5">
          <p>No booking history found.</p>
          <Button variant="warning" href="/Hero">
            Browse Properties
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Profile;
