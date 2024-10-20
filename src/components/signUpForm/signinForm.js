import React, { useState } from 'react';
import { loginWithEmail, signInWithGoogle } from '../database/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginWithEmail(email, password);
      // Navigate to the home page after successful login
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        // Navigate to the home page after successful Google login
        navigate('/');
      })
      .catch((error) => {
        console.error('Google Login Error:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-4"
        >
          Login with Email
        </button>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mb-6"
        >
          Continue with Google
        </button>

        <p className="text-center">
          Don’t have an account?
          <span className="text-blue-500 cursor-pointer ml-1" onClick={() => navigate('/signup')}>
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
