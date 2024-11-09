import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center py-8 min-h-96 flex flex-col"
      style={{ backgroundImage: 'url("/images/headbg.png")' }} // Replace with your background image path
    >
      <div className="container mx-auto flex flex-wrap justify-between px-28 pt-12">
        {/* First Column: Logo, Description, Social Media Links */}
        <div className="w-1/2 text-left flex flex-col">
          <img src="/images/image1.png" alt="Logo" className="mb-4 " style={{ width: '100px', height: 'auto' }} />

          <p className="mb-4">
          At Credit Online Finance, we’re redefining finance with advanced AI solutions. Our platform delegates businesses and individuals to make smarter financial decisions, streamline operations, and unlock new growth opportunities.

          </p>
          <div className="flex space-x-4 pt-3">
            <a href="#" className="hover:text-gray-400 text-2xl"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-400 text-2xl"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400 text-2xl"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-400 text-2xl"><FaInstagram /></a>
          </div>
        </div>

        {/* Second Column: Useful Links */}
        <div className="w-1/4 text-left flex flex-col pl-20">
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400 ">Link 1</a></li>
            <li><a href="#" className="hover:text-gray-400 ">Link 2</a></li>
            <li><a href="#" className="hover:text-gray-400 ">Link 3</a></li>
            <li><a href="#" className="hover:text-gray-400 ">Link 4</a></li>
            <li><a href="#" className="hover:text-gray-400 ">Link 5</a></li>
          </ul>
        </div>

        {/* Third Column: Contact Us */}
        <div className="w-1/4 text-left flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="mb-2">50 Jones St, San Francisco, CA 94102</p>
          <p className="mb-2">info@mrbrainmaster.com</p>
          <p>+1 408-219-4333</p>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="text-center mt-16">
        <p className="text-sm text-black">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
