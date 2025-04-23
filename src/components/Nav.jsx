import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className='flex justify-between items-center p-4 bg-gray-800 text-white'>
        <div>
            <h1 className="text-3xl font-sans">Emotica</h1>
        </div>
        <div className="relative w-60">
      <input
        type="text"
        className="w-full border border-amber-50 h-10 rounded-2xl pl-4 pr-10 bg-white text-black"
        placeholder="Search..."
      />
      <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>

        <ul className='flex space-x-7'>
            
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to ="/signup">SignUp</Link></li>
        </ul>
    </nav>
  )
}

export default Nav;
