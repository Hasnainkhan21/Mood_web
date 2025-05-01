import React from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav className='flex justify-between items-center p-4 bg-gray-600 text-white'>
        <div>
            <h1 className="text-3xl font-sans">Emotica</h1>
        </div>
      

        <ul className='flex space-x-7'>
            
            <li className=' hover:text-gray-200'><Link to="/">Home</Link></li>
            <li className=' hover:text-gray-200'><Link to="/about">About</Link></li>
            <li className=' hover:text-gray-200'><Link to="/contact">Contact</Link></li>
            <li className=' hover:text-gray-200'><Link to ="/signup" className='border-yellow-500 border-1 00 hover:bg-white hover:text-black p-2 rounded-lg'>SignUp</Link></li>
        </ul>
    </nav>
  )
}

export default Nav;
