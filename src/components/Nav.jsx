import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <nav className="bg-gray-600 text-white p-4">
      <div className="flex justify-between items-center h-[35px]">
        <img src={logo} className='size-20'/>
       <div/> 

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Full nav for medium and up */}
        <ul className="hidden md:flex space-x-7">
          <li className="hover:text-gray-200"><Link to="/">Home</Link></li>
          <li className="hover:text-gray-200"><Link to="/features">Features</Link></li>
          <li className="hover:text-gray-200"><Link to="/about">About</Link></li>
          <li>
            <Link to="/signup" className="border-yellow-500 border hover:bg-white hover:text-black p-2 rounded-lg">
              SignUp
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <ul className="flex flex-col space-y-2 mt-4 md:hidden">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/features" onClick={() => setIsOpen(false)}>Features</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li>
            <Link to="/signup" onClick={() => setIsOpen(false)} className="border-yellow-500 border hover:bg-white hover:text-black p-2 rounded-lg block w-fit">
              SignUp
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
