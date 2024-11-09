import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">FinTech</div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#services" className="hover:text-gray-400">Services</a></li>
          <li><a href="#pricing" className="hover:text-gray-400">Pricing</a></li>
          <li><a href="#blogs" className="hover:text-gray-400">Blogs</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
        <a 
          href="/admin" 
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Admin
        </a>
      </nav>
    </header>
  );
};

export default Header;
