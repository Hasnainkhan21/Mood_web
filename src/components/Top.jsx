import React from 'react'
import backicon from '../assets/icons/back-button.png'
import { useNavigate } from 'react-router-dom';

function Top() {

  const navigate = useNavigate();
    


  return (
    <div className="w-full mt-2 flex items-center px-6">
  
    <button onClick={()=> navigate(-1)} className="flex cursor-pointer items-center gap-2 bg-white text-gray-500 border-2 border-cyan-500 font-sans px-4 py-2 rounded-full hover:bg-blue-100 transition duration-300">
    <img src={backicon} alt="back" className="w-5" />Home</button>
  
</div>

  )
}

export default Top
