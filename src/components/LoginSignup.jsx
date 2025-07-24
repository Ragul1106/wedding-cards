import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];

  const handleLogin = (e) => {
    e.preventDefault();
    const users = getUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      navigate('/'); 
    } else {
      setError('Account does not exist. Please sign up first.');
      setIsLogin(false); 
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const users = getUsers();
    const existing = users.find((u) => u.email === email);
    if (existing) {
      setError('Account already exists. Please login.');
      setIsLogin(true);
    } else if (password !== rePassword) {
      setError('Passwords do not match.');
    } else {
      const newUsers = [...users, { email, password }];
      localStorage.setItem('users', JSON.stringify(newUsers));
      navigate('/'); 
    }
  };

  return (
    <div className="min-h-screen bg-[#E6E6FA] flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8">
        <div className="flex justify-between mb-6 border-b border-gray-300">
          <button
            onClick={() => {
              setIsLogin(true);
              setError('');
            }}
            className={`pb-2 text-lg cursor-pointer font-semibold ${isLogin ? 'border-b-2 border-black' : 'text-gray-500'}`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setIsLogin(false);
              setError('');
            }}
            className={`pb-2 text-lg cursor-pointer font-semibold ${!isLogin ? 'border-b-2 border-black' : 'text-gray-500'}`}
          >
            Sign Up
          </button>
        </div>

        {error && (
          <div className="text-red-600 text-sm mb-4 text-center font-medium">
            {error}
          </div>
        )}

        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <h3 className="text-lg font-medium">Login to my Account</h3>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#B83232] text-white cursor-pointer w-full py-2 rounded font-semibold hover:bg-[#a72929]"
            >
              Login & Continue
            </button>
            <div className="text-left text-sm mt-2 text-[#B83232] cursor-pointer hover:underline">
              Forgot Password
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-4">
            <h3 className="text-lg font-medium">New User? Sign up Now</h3>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Re-Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Re-Enter Password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#B83232] text-white cursor-pointer w-full py-2 rounded font-semibold hover:bg-[#a72929]"
            >
              Sign Up & Continue
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
