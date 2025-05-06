import React, { useState } from 'react';

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({ userName: "", email: "", password: "", confirmPassword: "" });

    const newErrors = {};

    if (!userName.trim()) newErrors.userName = "Username is required";

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      newErrors.password = "Password must be at least 6 characters and contain one letter and number";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success
    alert("Account created successfully");
    console.log({ userName, email, password });

    // Clear form
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-600">Create Account</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="username" className="block mb-1 text-gray-600 font-medium">Username</label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your username"
            />
            {errors.userName && <p className="text-red-600 text-[12px] mt-1">{errors.userName}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-600 text-[12px]  mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-gray-700 font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-600 text-[12px]  mt-1">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confpass" className="block mb-1 text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              id="confpass"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Confirm password"
            />
            {errors.confirmPassword && <p className="text-red-600 text-[12px] mt-1">{errors.confirmPassword}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-200 text-lg font-semibold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
