// src/components/Main.js
import React from 'react';
import Navbar from './Navbar';

const Main = () => {
  return (
    <div>
      <Navbar />
      <section id="header">
        <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/img/1.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white p-8">
            <h2 className="text-4xl font-bold">Welcome to College</h2>
            <p className="mt-4 text-xl">Education is the best key to success in life</p>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="#discover" className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-400">Discover More</a>
              <a href="#contact" className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-800">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">About Our College</h3>
          <p className="text-lg text-gray-700 mb-6">We offer world-class education with a wide range of courses to help you succeed in your career.</p>
          <div className="flex justify-center space-x-6">
            <div className="w-1/3">
              <h4 className="font-semibold text-xl mb-3">Programs</h4>
              <p>Our programs are designed to meet the needs of modern education, offering flexibility and industry relevance.</p>
            </div>
            <div className="w-1/3">
              <h4 className="font-semibold text-xl mb-3">Faculty</h4>
              <p>We have a diverse and experienced faculty who are experts in their fields and passionate about teaching.</p>
            </div>
            <div className="w-1/3">
              <h4 className="font-semibold text-xl mb-3">Campus Life</h4>
              <p>Experience a vibrant campus life with various extracurricular activities, clubs, and events.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
