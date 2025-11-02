import React from "react";
import Navbar from "./Navbar";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen bg-gray-50 text-gray-800 pt-28 px-6 md:px-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Contact <span className="text-yellow-500">Us</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our rental listings or need assistance?
            We’d love to hear from you! Just fill out the form below or reach
            out directly using the details provided.
          </p>
        </div>

        {/* Contact Form + Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-md shadow-md hover:bg-yellow-500 transition-all w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center bg-white shadow-md rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Reach out directly to our office or connect with us on phone and email.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-500 text-xl" />
                <span>Divine Apartment, Sanchar Nagar Extension, Indore, M.P</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-500 text-xl" />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-500 text-xl" />
                <span>support@rentalconnect.com</span>
              </div>
            </div>

            {/* Google Map (optional) */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-md">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.4449365940345!2d75.8697!3d22.6866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963033333333333%3A0xabcdef!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1719933482609!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
