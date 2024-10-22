import React, { useState, useContext } from "react";
import {
  loginWithEmail,
  signInWithGoogle,
} from "../../database/firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import { Label } from "./design/label";
import { Input } from "./design/input";
import { cn } from "../../lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginWithEmail(email, password); // Assuming this returns user info
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed, please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      console.log(user.displayName);
      navigate("/");
    } catch (error) {
      setError("Google Login Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-black">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to Aceternity
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Please log in to continue.
        </p>
        {error && <p className="text-red-500">{error}</p>}

        <form className="my-8" onSubmit={handleLogin}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="projectmayhem@fc.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </LabelInputContainer>

          <button
            type="submit"
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          >
            Login with Email
            <BottomGradient />
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mt-4 w-full"
          >
            <IconBrandGoogle className="mr-2" />
            Continue with Google
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>

        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Don’t have an account?&nbsp;
          <Link to="/signup" className="text-blue-700 cursor-pointer">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Login;
