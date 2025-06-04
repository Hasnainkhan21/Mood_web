import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[tokenIs, setToken] = useState(null)
  const [username, setUser] = useState(null)

useEffect(()=>{
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('userName');
  setToken(token)
  setUser(username)
},[tokenIs])

  const Logout = () =>{
    localStorage.clear()
    setToken(null)  
  }
 
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
        <ul className="hidden md:flex items-center space-x-5 text-md ">
  <li>
    <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
  </li>
  <li>
    <Link to="/features" className="hover:text-gray-300 transition duration-300">Features</Link>
  </li>
  <li>
    <Link to="/about" className="hover:text-gray-300 transition duration-300">About</Link>
  </li>

{/* logout and Login functionality */}
  {tokenIs ? (
    <>
      <li className="text-yellow-300 text-[25px]  font-[syne]">
        {username}
      </li>
      <li>
        <button onClick={Logout} className="border cursor-pointer border-red-500 text-gray-200 hover:bg-red-500 hover:text-white px-3 py-1 rounded-lg transition duration-300">
          Logout
        </button>
      </li>
    </>
  ) : (
    <li>
      <Link
        to="/login"
        className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-1 rounded-lg transition duration-300"
      >
        Sign In
      </Link>
    </li>
  )}
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
