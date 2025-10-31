import React from "react";
import flat from "../images/flat.jpg";
import flat1 from "../images/flat1.jpg";
import flat2 from "../images/flat2.jpg";
import flat3 from "../images/flat3.jpg";
import { Link } from "react-router-dom";

export default function RecommendedProperties() {
  return (
    <section className="px-6 md:px-16 py-14 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_#facc15,_transparent_60%)]"></div>

      {/* Section Title */}
      <div className="relative z-10 mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center gap-3">
          <span className="h-1.5 w-10 bg-yellow-500 rounded-full"></span>
          Recommended <span className="text-yellow-500">Properties</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Discover the best rooms and apartments tailored for students and owners.
        </p>
      </div>

      {/* Scrollable Property Cards */}
      <div className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth">
        
        {/* Property Card 1 */}
        <Link
          to="/flat"
          className="min-w-[270px] sm:min-w-[300px] md:min-w-[340px] flex-shrink-0 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] snap-center"
        >
          <img
            src={flat}
            alt="2 BHK Apartment"
            className="rounded-t-2xl w-full h-56 object-cover"
          />
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 truncate">
              2 BHK Apartment, 2 Baths
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              Divine Apartment, Sanchar Nagar Extension, Indore, M.P
            </p>
            <div className="flex justify-between items-center mt-3 text-sm">
              <p className="text-gray-700 font-semibold">Posted by Owner</p>
              <p className="text-green-600 font-medium">3 hrs ago</p>
            </div>
          </div>
        </Link>

        {/* Property Card 2 */}
        <Link
          to="/flat"
          className="min-w-[270px] sm:min-w-[300px] md:min-w-[340px] flex-shrink-0 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] snap-center"
        >
        <div className="min-w-[270px] sm:min-w-[300px] md:min-w-[340px] flex-shrink-0 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] snap-center">
          <img
            src={flat1}
            alt="1BHK Flat"
            className="rounded-t-2xl w-full h-56 object-cover"
          />
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 truncate">
              1BHK Independent Flat
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              Ambika Nagar, Bengali Square, Indore, M.P
            </p>
            <div className="flex justify-between items-center mt-3 text-sm">
              <p className="text-gray-700 font-semibold">Posted by Owner</p>
              <p className="text-green-600 font-medium">3 days ago</p>
            </div>
          </div>
        </div>
        </Link>

        {/* Property Card 3 */}
        <Link
          to="/flat"
          className="min-w-[270px] sm:min-w-[300px] md:min-w-[340px] flex-shrink-0 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] snap-center"
        >
        <div className="min-w-[270px] sm:min-w-[300px] md:min-w-[340px] flex-shrink-0 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] snap-center">
          <img
            src={flat2}
            alt="Hostel Room"
            className="rounded-t-2xl w-full h-56 object-cover"
          />
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 truncate">
              1 Bed Hostel Room
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              Guru Meher Girl’s Hostel, Indrapuri Colony, Indore, M.P
            </p>
            <div className="flex justify-between items-center mt-3 text-sm">
              <p className="text-gray-700 font-semibold">Posted by Owner</p>
              <p className="text-green-600 font-medium">3 hrs ago</p>
            </div>
          </div>
        </div>
        </Link>

        {/* Property Card 4 */}
        <Link
          to="/flat"
          className="min-w-[270px] sm:min-w-[300px] md:min-w-[340px] flex-shrink-0 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] snap-center"
        >
        <div className="min-w-[270px] sm:min-w-[300px] md:min-w-[340px] flex-shrink-0 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] snap-center">
          <img
            src={flat3}
            alt="2BHK Flat"
            className="rounded-t-2xl w-full h-56 object-cover"
          />
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 truncate">
              2BHK Modern Apartment
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              Silver Heights, Scheme 140, Indore, M.P
            </p>
            <div className="flex justify-between items-center mt-3 text-sm">
              <p className="text-gray-700 font-semibold">Posted by Owner</p>
              <p className="text-green-600 font-medium">6 hrs ago</p>
            </div>
          </div>
        
        </div>
        </Link>

        <Link
          to="/flat"
          className="min-w-[270px] sm:min-w-[300px] md:min-w-[340px] flex-shrink-0 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] snap-center"
        >
          <img
            src={flat}
            alt="2 BHK Apartment"
            className="rounded-t-2xl w-full h-56 object-cover"
          />
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 truncate">
              2 BHK Apartment, 2 Baths
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              Divine Apartment, Sanchar Nagar Extension, Indore, M.P
            </p>
            <div className="flex justify-between items-center mt-3 text-sm">
              <p className="text-gray-700 font-semibold">Posted by Owner</p>
              <p className="text-green-600 font-medium">3 hrs ago</p>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}
