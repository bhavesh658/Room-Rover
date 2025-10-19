import React from 'react'

export default function Properties() {
    const properties = [
    {
      name: "Hostel",
      img: "images/single-bed-rooms-rental-services.png", // replace with your real image URL
    },
    {
      name: "PG",
      img: "",
    },
    {
      name: "Flat",
      img: "",
    },
    {
      name: "Mess",
      img: "",
    },
  ];

    return (
        <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-extrabold tracking-wide mb-12 text-gray-900">
        PROPERTIES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {properties.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-60 h-44 object-cover rounded-lg shadow-md"
            />
            <p className="mt-4 text-lg font-semibold text-gray-900">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
        )
}
