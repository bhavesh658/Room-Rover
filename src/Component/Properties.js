import React from 'react';
import hostelImg from '../images/hostel.jpg';
import pgImg from '../images/pg.jpg';
import flatImg from '../images/flat.jpg';
import messImg from '../images/mess.jpg';


export default function Properties() {
    return (
        <section id='prop' className="py-16 bg-white w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-center ">
      <h2 className="text-3xl font-extrabold tracking-wide mb-12 text-gray-900">
        PROPERTIES
      </h2>

      <div className="flex justify-center items-center">
        <ul className="flex flex-row items-center gap-6">
          <li className="flex flex-col items-center transform transition duration-300 hover:scale-105">
            <img src={hostelImg} alt="" className="w-60 h-44 object-cover rounded-lg shadow-md"/>
            <p className="mt-4 text-lg font-semibold text-gray-900">Hostel</p>
          </li>
          <li className="flex flex-col items-center transform transition duration-300 hover:scale-105">
            <img src={pgImg} alt="" className="w-60 h-44 object-cover rounded-lg shadow-md"/>
            <p className="mt-4 text-lg font-semibold text-gray-900">PG</p>
          </li >
          <li className="flex flex-col items-center transform transition duration-300 hover:scale-105">
            <img src={flatImg} alt="" className="w-60 h-44 object-cover rounded-lg shadow-md" />
            <p className="mt-4 text-lg font-semibold text-gray-900">Flat</p>
          </li>
          <li className="flex flex-col items-center transform transition duration-300 hover:scale-105">
            <img src={messImg} alt="" className="w-60 h-44 object-cover rounded-lg shadow-md" />
            <p className="mt-4 text-lg font-semibold text-gray-900">Mess</p>
          </li>
        </ul>
      </div>
    </section>
        )
}
