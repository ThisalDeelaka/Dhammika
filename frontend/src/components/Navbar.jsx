// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">
          <i className="fa fa-graduation-cap text-orange-500"></i> Coll<span className="text-orange-500">ege</span>
        </a>
        <button className="md:hidden p-2 text-gray-600">
          <i className="fa fa-bars"></i>
        </button>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-orange-500">Home</a>
          <a href="/about" className="text-gray-700 hover:text-orange-500">About</a>
          <a href="/courses" className="text-gray-700 hover:text-orange-500">Courses</a>
          <a href="/contact" className="text-gray-700 hover:text-orange-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
