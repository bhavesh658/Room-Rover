import React from "react";
import flat from "../images/flat.jpg";
// import flat from "../images/flat.jpg";
// import flat from "../images/flat.jpg";
// import flat from "../images/flat.jpg";
// import FlatPage from "./Flatpage";
import { Link } from 'react-router-dom';

export default function RecommendedProperties() {
  return (
    <section className="px-8 md:px-16 py-12 bg-white">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900">
        Recommended Properties
      </h2>

      {/* Horizontal Scroll Section */}
      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">

        {/* Property 1 */}
        <Link to="/flat">
        <div className="min-w-[250px] transform transition duration-300 hover:scale-105 sm:min-w-[280px] md:min-w-[300px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex-shrink-0">
                    <img src={flat} alt="2 BHK Apartment" className="rounded-t-2xl w-full h-52 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 truncate">
              2 BHK Apartment, 2 Baths
            </h3>
            <p className="text-sm text-gray-600 truncate">
              in Divine Apartment, Sanchar Nagar Extension, Indore, M.P
            </p>
            <div className="flex justify-between items-center mt-2 text-sm">
              <p className="text-gray-800 font-semibold">Posted by Owner</p>
              <p className="text-green-600 font-medium">3 hrs ago</p>
            </div>
          </div>

        </div>
        </Link>


        {/* Property 2 */}
        <div className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex-shrink-0">
          <img src={flat} alt="1BHK Flat" className="rounded-t-2xl w-full h-52 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 truncate">
              1BHK 1Bath Independent Flat
            </h3>
            <p className="text-sm text-gray-600 truncate">
              in Ambika Nagar, Bengali Square, Indore, M.P
            </p>
            <div className="flex justify-between items-center mt-2 text-sm">
              <p className="text-gray-800 font-semibold">Posted by Owner</p>
              <p className="text-green-600 font-medium">3 days ago</p>
            </div>
          </div>
        </div>

        {/* Property 3 */}
        <div className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex-shrink-0">
          <img src={flat} alt="Hostel Room" className="rounded-t-2xl w-full h-52 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 truncate">
              1 Bed available, hostel
            </h3>
            <p className="text-sm text-gray-600 truncate">
              in Guru Meher Girl’s Hostel, Indrapuri Colony, Indore, M.P
            </p>
            <div className="flex justify-between items-center mt-2 text-sm">
              <p className="text-gray-800 font-semibold">Posted by Owner</p>
              <p className="text-green-600 font-medium">3 hrs ago</p>
            </div>
          </div>
        </div>

        {/* Property 4 */}
        <div className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex-shrink-0">
          <img src={flat} alt="2 BHK Apartment" className="rounded-t-2xl w-full h-52 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 truncate">
              2 BHK Apartment, 2 Baths
            </h3>
            <p className="text-sm text-gray-600 truncate">
              in Divine Apartment, Sanchar Nagar Extension, Indore, M.P
            </p>
            <div className="flex justify-between items-center mt-2 text-sm">
              <p className="text-gray-800 font-semibold">Posted by Owner</p>
              <p className="text-green-600 font-medium">3 hrs ago</p>
            </div>
          </div>
        </div>

        {/* Property 5 */}
        <div className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex-shrink-0">
          <img src={flat} alt="1BHK Flat" className="rounded-t-2xl w-full h-52 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 truncate">
              1BHK 1Bath Independent Flat
            </h3>
            <p className="text-sm text-gray-600 truncate">
              in Ambika Nagar, Bengali Square, Indore, M.P
            </p>
            <div className="flex justify-between items-center mt-2 text-sm">
              <p className="text-gray-800 font-semibold">Posted by Owner</p>
              <p className="text-green-600 font-medium">3 days ago</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
