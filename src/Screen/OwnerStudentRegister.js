import { Link } from "react-router-dom";
import React from "react";
import backgroundImage from "../Screen/Rectangle.jpg";

const OwnerStudentRegister = () => {
  const imagebg = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center space-y-8"
      style={imagebg}
    >
      {/* Owner Box */}
      <Link to="/RegisterAsOwner">
        <div className="w-64 h-32 flex items-center justify-center bg-yellow-400 text-black text-2xl font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          Owner
        </div>
      </Link>

      {/* Student Box */}
      <Link to={"/RegisterAsStudent"}>
        <div className="w-64 h-32 flex items-center justify-center bg-black text-white text-2xl font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          Student
        </div>
      </Link>
    </section>
  );
};

export default OwnerStudentRegister;
