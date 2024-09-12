import React from 'react';
import DoctorImg from '../Assets/DoctorBackground.jpg';
import { FaStethoscope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${DoctorImg})` }}>
      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Decorative Medical Icon */}
        <FaStethoscope className="text-6xl text-yellow-400 mb-4" />

        {/* Title */}
        <h1 className="text-6xl font-bold mb-4 font-serif tracking-wider drop-shadow-lg">
          Welcome to <span className="text-yellow-400">SortMedic</span>
        </h1>

        {/* Description */}
        <p className="text-xl leading-relaxed max-w-3xl mx-auto font-sans drop-shadow-lg">
          <span className=" text-white bg-opacity-90 px-4 py-2 rounded-lg">
            Your healthcare companion, empowering rural communities with AI-driven solutions for symptom
            assessments, telehealth consultations, and emergency health education — accessible even without the internet.
          </span>
        </p>

        {/* Decorative Line and Text */}
        <div className="mt-6 flex items-center justify-center space-x-4">
          <span className="block h-1 w-16 bg-yellow-400"></span>
          <p className="text-lg font-semibold tracking-wide drop-shadow-lg">Empowering Rural Health</p>
          <span className="block h-1 w-16 bg-yellow-400"></span>
        </div>

        {/* Button */}
        <Link to="/appointment" >
            <button className="mt-8 bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
                Appointment
            </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
