import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook
import hostelImg from "../images/hostel.jpg";
import pgImg from "../images/pg.jpg";
import flatImg from "../images/flat.jpg";
import messImg from "../images/mess.jpg";
import API_URL from "../apiPoint";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ initialize navigation

  const handleClick = async (type) => {
    setSelectedType(type);
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`${API_URL}/api/properties/${type}`);
      setProperties(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("⚠️ Unable to load properties. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const propertyTypes = [
    { name: "Hostel", image: hostelImg, type: "hostel" },
    { name: "PG", image: pgImg, type: "pg" },
    { name: "Flat", image: flatImg, type: "flat" },
    { name: "Mess", image: messImg, type: "mess" },
  ];

  const handleView = (id) => {
    navigate(`/property/${id}`); // ✅ redirect to details page
  };

  return (
    <section
      id="prop"
      className="py-16 bg-white w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-center"
    >
      <h2 className="text-3xl font-extrabold tracking-wide mb-12 text-gray-900">
        PROPERTIES
      </h2>

      {/* Property Type Selection */}
      <div className="flex justify-center items-center mb-8">
        <ul className="flex flex-row items-center gap-6">
          {propertyTypes.map((item) => (
            <li
              key={item.type}
              onClick={() => handleClick(item.type)}
              className="cursor-pointer flex flex-col items-center transform transition duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-60 h-44 object-cover rounded-lg shadow-md"
              />
              <p className="mt-4 text-lg font-semibold text-gray-900">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Loading State */}
      {loading && (
        <p className="text-gray-500 text-lg animate-pulse">
          Loading properties...
        </p>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500 text-lg">{error}</p>}

      {/* Property Cards Display */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.length > 0 ? (
            properties.map((prop, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 text-left"
              >
                <img
                  src={prop.image}
                  alt={prop.name}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="text-xl font-bold text-gray-800">{prop.name}</h3>
                <p className="text-gray-600">{prop.location}</p>
                <p className="text-yellow-600 font-semibold">
                  ₹{prop.rent} / month
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Owner: {prop.owner}
                </p>

                {/* ✅ View Button */}
                <button
                  onClick={() => handleView(prop._id)}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  View
                </button>
              </div>
            ))
          ) : selectedType ? (
            <p className="text-gray-500">
              No properties found for {selectedType}
            </p>
          ) : (
            <p className="text-gray-400">
              Click on a category to view properties
            </p>
          )}
        </div>
      )}
    </section>
  );
}
