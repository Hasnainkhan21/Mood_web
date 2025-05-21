import { useState } from 'react';
import axios from 'axios';
import { Add_User } from '../API/Api_uri';
import { Login_User } from '../API/Api_endpoints';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const Nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
     if(!passwordRegex.test(password)){
      setError('Password must be at least 6 characters and contain one letter and number');
      return;
     }

    setError('');
    const User = { email, password };
    const URI = Add_User + Login_User;

    try {
      const res = await axios.post(URI, User);
      const data = res.data;
      console.log(data);

      if (data) {
        setMsg(data.msg);   //get the backend msg (login successffull/not)
        localStorage.setItem('token', data.User_Token);   //stores the generated token in localstorage
        Nav('/');
      }
    } catch (err) {
      setError('Login failed. Please check your credintials.');
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
        {msg && <p className="text-green-500 mb-4 text-sm text-center">{msg}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-200 text-lg font-semibold"
          >
            Login
          </button>
        </form>

        {/* ✅ Signup Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
