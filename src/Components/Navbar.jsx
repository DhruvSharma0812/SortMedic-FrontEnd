import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const location = useLocation(); // Get the current route path
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  // Determine which link is active based on the current route
  const isActive = (path) => location.pathname === path;

  return (
    <nav className='bg-gray-100 shadow-md'>
      <div className='flex justify-between items-center p-4'>
        {/* Logo */}
        <div className='flex items-center'>
          <Link to="/" className='flex items-center gap-2'>
            <FaBriefcaseMedical className='text-2xl md:text-3xl text-blue-600' />
            <span className='text-xl md:text-3xl font-bold text-blue-600'>SortMedic</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className='text-gray-600 hover:text-gray-800 focus:outline-none'
          >
            {isOpen ? <HiX className='w-6 h-6' /> : <HiMenu className='w-6 h-6' />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className='hidden md:flex space-x-8'>
          <Link 
            to="/" 
            className={`px-4 py-2 text-lg font-medium transition-colors duration-300 ${isActive('/') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            Home
          </Link>
          <Link 
            to="/appointment" 
            className={`px-4 py-2 text-lg font-medium transition-colors duration-300 ${isActive('/appointment') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            Appointment
          </Link>
          <Link 
            to="/about-us" 
            className={`px-4 py-2 text-lg font-medium transition-colors duration-300 ${isActive('/about-us') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            About Us
          </Link>
        </div>

        {/* Login Button (Desktop) */}
        <div className='hidden md:flex'>
          <Link to="/login">
            <button className='bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default, shown when `isOpen` is true) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-100`}>
        <Link 
          to="/" 
          className={`block px-4 py-2 text-lg font-medium ${isActive('/') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/appointment" 
          className={`block px-4 py-2 text-lg font-medium ${isActive('/appointment') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          onClick={() => setIsOpen(false)}
        >
          Appointment
        </Link>
        <Link 
          to="/about-us" 
          className={`block px-4 py-2 text-lg font-medium ${isActive('/about-us') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <Link to="/login">
          <button className='w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
