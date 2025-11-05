import React from "react";
import './Aboutus.css';
import Navbar from "./Navbar";

function Aboutus() {
  return (
    <>
    {/* <Navbar/> */}
    <section className="about">
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-yellow-500 mb-6">
          About <span className="italic text-bold">BookMyRoom</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          BookMyRoom is a smart rental solution designed exclusively for students.
          We help you find, compare, and rent the best accommodations near your college —
          without any hassle. Our mission is to make student housing simple, transparent,
          and accessible from anywhere.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">
              🏠 Easy Rentals
            </h2>
            <p className="text-gray-600">
              Browse verified listings and rent rooms with just a few clicks.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">
              🔒 Safe & Secure
            </h2>
            <p className="text-gray-600">
              Your safety is our priority. We ensure secure listings and reliable landlords.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">
              💬 Student-Friendly
            </h2>
            <p className="text-gray-600">
              Designed for students by students — affordable, flexible, and easy to use.
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 text-gray-600">
          <p>
            <span className="font-semibold text-yellow-500">BookMyRoom</span> — 
            Your trusted partner in finding the perfect place to stay.
          </p>
          
        </div>
      </div>
    </div>
    </section>
    </>
  );
}

export default Aboutus;