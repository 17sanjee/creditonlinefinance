import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer
      className="bg-lowdarkgreen bg-cover bg-center py-8 min-h-96 flex flex-col"
       // Replace with your background image path
    >
      <div className="container mx-auto flex flex-wrap justify-between px-28 pt-12">
        {/* First Column: Logo, Description, Social Media Links */}
        <div className="w-1/2 text-left flex flex-col">
          <img src="/images/footer_logo.svg" alt="Logo" className="mb-4 " style={{ width: '150px', height: 'auto' }} />

          <p className="mb-4">
          At Credit Online Finance, we’re redefining finance with advanced AI solutions. Our platform delegates businesses and individuals to make smarter financial decisions, streamline operations, and unlock new growth opportunities.

          </p>
          <div className="flex space-x-5 pt-3">
            <a href="https://web.facebook.com/CredOnFinance/" className="text-darkGreen hover:text-lightGreen text-2xl"><FaFacebook /></a>
            <a href="https://x.com/CredOnFinance" className="text-darkGreen hover:text-lightGreen text-2xl"><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/credit-online-finance/" className="text-darkGreen hover:text-lightGreen  text-2xl"><FaLinkedin /></a>
            <a href="https://www.youtube.com/@CreditOnlineFinance" className="text-darkGreen hover:text-lightGreen text-2xl"><FaYoutube /></a>
          </div>
        </div>

        {/* Second Column: Useful Links */}
        <div className="w-1/4 text-left flex flex-col pl-20">
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-gray-400 ">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400 ">About</a></li>
            <li><a href="#services" className="hover:text-gray-400 ">Services</a></li>
            <li><a href="#pricing" className="hover:text-gray-400 ">Pricing</a></li>
            <li><a href="#contact" className="hover:text-gray-400 ">Contact</a></li>
          </ul>
        </div>

        {/* Third Column: Contact Us */}
        <div className="w-1/4 text-left flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="mb-4"> 268 Elvitigala Mawatha, Colombo 00500, Sri Lanka.</p>
          <p className="mb-4">admin@app.creditonlinefinance.com</p>
          <p>+94 76 301 6688</p>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="text-center mt-16">
        <p className="text-sm text-black">
          &copy; {new Date().getFullYear()} <a href="http://creditonlinefinance.com/"><strong>CreditOnlineFinance.com</strong></a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
