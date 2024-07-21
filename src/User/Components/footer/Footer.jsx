import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Your Company</h1>
          <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
          <a href="#" className="text-sm hover:text-gray-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
