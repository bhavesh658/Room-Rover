import React from "react";
import flatImg from "../images/flat.jpg";
import Navbar from "./Navbar";
import {
  FaWifi,
  FaTv,
  FaSnowflake,
  FaUtensils,
  FaParking,
  FaWater,
} from "react-icons/fa";
import profile from "../images/profile.png";
import { Link } from "react-router-dom";

export default function Flatpage() {
  const property = {
    price: "₹15,000",
    type: "Independent Flat for Rent",
    bedrooms: 2,
    bathrooms: 2,
    location: "Divine Apartment, Sanchar Nagar Extension, Indore, M.P",
    image1: flatImg,
    image2: flatImg,
    image3: flatImg,
    features: [
      { icon: <FaWifi />, text: "Free Wi-Fi" },
      { icon: <FaTv />, text: "Smart TV" },
      { icon: <FaSnowflake />, text: "Air Conditioning" },
      { icon: <FaUtensils />, text: "Kitchen Access" },
      { icon: <FaParking />, text: "Parking Available" },
      { icon: <FaWater />, text: "24/7 Water Supply" },
    ],
    owner: {
      name: "Rohit Mehta",
      address: "Indore, M.P",
      phone: "+91 9876543210",
      profilePic: profile,
    },
  };

  return (
    <>
      {/* Navbar fixed on top */}

      {/* Add top padding so content isn’t hidden under navbar */}
      <div className="min-h-screen bg-white text-gray-800 px-8 py-10 md:px-20 pt-32">
        {/* Property Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-6">
          <div className="flex items-start md:space-x-6">
            <div className="text-3xl font-extrabold text-gray-900">
              {property.price}
              <p className="text-sm font-medium text-gray-500">Per Month</p>
            </div>

            <div className="hidden md:block border-l border-gray-300 h-16 mx-4"></div>

            <div>
              <h2 className="text-2xl font-bold">
                {property.bedrooms} Bedrooms {property.bathrooms} Baths
              </h2>
              <p className="text-gray-600">{property.type}</p>
              <div className="flex items-center text-gray-500 mt-1 text-sm">
                {property.location}
              </div>
            </div>
          </div>

          <button className="mt-6 md:mt-0 bg-yellow-400 text-black font-bold px-8 py-3 rounded-md shadow-md hover:bg-yellow-500 transition-all">
            <Link to="/BookingPage">Rent Now</Link>
          </button>
        </div>

        {/* Photos Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Photos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src={property.image1}
              alt="Bedroom view" // ✅ Clean alt (no “image” or “photo”)
              className="rounded-xl object-cover w-full h-48 hover:scale-105 transition-transform duration-300 shadow-md"
            />
            <img
              src={property.image2}
              alt="Kitchen area" // ✅ Descriptive alt
              className="rounded-xl object-cover w-full h-48 hover:scale-105 transition-transform duration-300 shadow-md"
            />
            <img
              src={property.image3}
              alt="Living room" // ✅ Clean alt, no redundant wording
              className="rounded-xl object-cover w-full h-48 hover:scale-105 transition-transform duration-300 shadow-md"
            />
          </div>
        </div>

        {/* 🏠 Features Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Features & Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {property.features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-yellow-500 text-3xl mb-2">
                  {feature.icon}
                </div>
                <p className="text-gray-700 font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Owner Details */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Owner Details</h3>
          <div className="bg-gray-50 rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
            <div className="flex items-center gap-4">
              <img
                src={property.owner.profilePic}
                alt={property.owner.name} // ✅ Good: describes person shown
                className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400"
              />
              <div>
                <h4 className="text-xl font-bold">{property.owner.name}</h4>
                <p className="text-gray-600">{property.owner.address}</p>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 text-lg font-medium text-gray-700">
              {property.owner.phone}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
