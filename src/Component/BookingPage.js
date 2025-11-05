import React, { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! Proceed to payment.");
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl mt-11">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Fill Out Your Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Booking Details */}
          {/* <div>
            <label className="block text-gray-700 font-medium mb-1">Property Type</label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="flat">Flat</option>
              <option value="hostel">Hostel</option>
            </select>
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Check-in Date</label>
              <input
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Check-out Date</label>
              <input
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Payment Section */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Payment Details
            </h3>
            <p className="text-gray-600 mb-4">
              Choose your preferred payment method to confirm your booking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                onClick={() => alert("Proceeding to Razorpay...")}
              >
                💳 Pay with Razorpay
              </button>
              <button
                type="button"
                className="flex-1 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
                onClick={() => alert("Proceeding to Paytm...")}
              >
                💰 Pay with Paytm
              </button>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
