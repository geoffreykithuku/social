import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { SocialContext } from "../context/socialcontext";

const SignUp = () => {
  const { handleSignUp } = React.useContext(SocialContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl tracking-wider text-gray-300 mb-2">
          Sign Up - Elewa Social
        </h1>
        <form
          className="mt-6 border-t border-gray-400 pt-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp({ email, password });
            setRedirect(true);
          }}
        >
          <div className="flex flex-col">
            <label className="text-gray-300">Email</label>
            <input
              type="email"
              className="w-full bg-gray-800 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="text-gray-300">Password</label>
            <input
              type="password"
              className="w-full bg-gray-800 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="text-gray-300">Confirm Password</label>
            <input
              type="password"
              className="w-full bg-gray-800 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-gray-300 text-gray-800 mt-6 p-3 rounded-lg w-full font-semibold focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6">
          <p className="text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-gray-400 hover:text-gray-500 font-semibold"
            >
              Login here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
