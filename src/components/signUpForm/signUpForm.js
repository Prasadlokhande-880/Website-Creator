import React, { useState } from 'react';
import { signupWithEmail, signInWithGoogle } from '../database/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signupWithEmail(email, password);
      // Navigate to the home page after successful signup
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then(() => {
        // Navigate to the home page after successful Google signup
        navigate('/');
      })
      .catch((error) => {
        console.error('Google Sign Up Error:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

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
          onClick={handleSignup}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-4"
        >
          Sign Up with Email
        </button>

        <button
          onClick={handleGoogleSignUp}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mb-6"
        >
          Continue with Google
        </button>

        <p className="text-center">
          Already have an account?
          <span className="text-blue-500 cursor-pointer ml-1" onClick={() => navigate('/login')}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
