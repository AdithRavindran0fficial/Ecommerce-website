import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-black text-white py-8 px-12 mt-12'>
      <div className='max-container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        
        
        <div>
          <h2 className='text-lg font-bold mb-4'>Zap</h2>
          <p className='font-light'>
            Zap Shoes Inc.<br />
            123 Fashion Street<br />
            New York, NY 10001<br />
            <a href="mailto:info@Zapshoes.com" className='text-blue-500 hover:underline'>info@Zap.com</a>
          </p>
        </div>

        
        <div>
          <h2 className='text-lg font-bold mb-4'>Shop now</h2>
          <ul className='font-light'>
            
            <li className='mb-2'><Link to="/men" className='hover:underline'>Men</Link></li>
            <li className='mb-2'><Link to="/women" className='hover:underline'>Women</Link></li>
            <li className='mb-2'><Link to="/collections" className='hover:underline'>Collections</Link></li>
            
            
          </ul>
        </div>

        
        <div>
          <h2 className='text-lg font-bold mb-4'>Follow Us</h2>
          <ul className='flex space-x-4'>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-blue-500'>
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-blue-400'>
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-pink-500'>
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='text-blue-700'>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h2 className='text-lg font-bold mb-4'>Contact Us</h2>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full mb-4 p-2 rounded-lg text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-2 rounded-lg text-black"
            />
            <textarea
              placeholder="Message"
              className="w-full mb-4 p-2 rounded-lg text-black"
            />
            <button
              type="submit"
              className="w-full bg-slate-500 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className='text-center mt-8'>
        <p className='font-light'>&copy; {new Date().getFullYear()} Zap Shoes Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
