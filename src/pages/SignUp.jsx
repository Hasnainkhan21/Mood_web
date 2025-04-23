import React from 'react'
import { useState } from 'react';


function SignUp() {

    let [userName, setUserName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [error1, setError1] = useState("");
    let [error2, setError2] = useState("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;


    const handleSubmit = (e) => {
        e.preventDefault();

        //email validation
        if(!emailRegex.test(email)){
         
            setError1("wrong email enetred")
        }else{
            console.log("valid email" + email)
            
        }

        //password validation
        if(!passwordRegex.test(password)){
           setError2("password must be at least 6 characters long and contain at least one letter and one number")
        
    }else{
        console.log("valid password" + password)
        }

        if(password !== confirmPassword){
            console.log("passwords do not match")
            return
        }

    }
  return(
    <>
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
  <h1 className="text-3xl font-bold mb-6">Sign Up</h1>

  <form
    onSubmit={handleSubmit}
    className="w-full max-w-2xl bg-white p-8 shadow-md flex flex-col gap-6"
  >
    <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="username" className="block mb-1 text-gray-700 font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUserName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Enter your username"
        />
        <p className='text-red-600 text-[12px] ml-5'></p>
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 text-gray-700 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Enter your email"
        />
        <p className='text-red-600 text-[12px] ml-5'>{error1}</p>
      </div>

      <div>
        <label htmlFor="password" className="block mb-1 text-gray-700 font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Enter your password"
        />
        <p className='text-red-600 text-[12px] ml-5'>{error2}</p>
      </div>

      <div>
        <label htmlFor="confpass" className="block mb-1 text-gray-700 font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          id="confpass"
          name="confpass"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Cconfirm password"
        />
        <p className='text-red-600 text-[12px] ml-5'></p>
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition duration-200 text-lg font-semibold"
    >
      Sign Up
    </button>
  </form>
</div>

</>

)
}

export default SignUp;
