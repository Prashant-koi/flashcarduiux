


import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-4 px-6 w-full flex flex-col sm:flex-row justify-between items-center mt-10">
      {/* Left Section */}
      <div className="mb-4 sm:mb-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} PrepBot. All rights reserved.</p>
      </div>

      {/* Middle Section - Social Media Icons */}
      <div className="flex space-x-4 mb-4 sm:mb-0">
        <a href="#" aria-label="Facebook" className="hover:text-blue-400">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-blue-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-pink-400">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-500">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      {/* Right Section - Links */}
      <div className="flex space-x-4">
        <a href="/privacy" className="text-sm hover:text-gray-400">Privacy Policy</a>
        <a href="/terms" className="text-sm hover:text-gray-400">Terms of Service</a>
        <a href="/contact" className="text-sm hover:text-gray-400">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer