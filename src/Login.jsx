import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MyAuthProviderContext } from "./AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase.init"; 
import './back.css'

const Login = () => {
  const { logInUser, googleSignIn } = useContext(MyAuthProviderContext);
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");
  const [showResetForm, setShowResetForm] = useState(false); // State for showing password reset form
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Password reset email sent. Please check your inbox.");
        setShowResetForm(false); // Close reset form
      })
      .catch((err) => {
        setError({ ...error, reset: err.message });
        toast.error("Failed to send reset email. Please try again.");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast("Log in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast("Oops! Log In Failed");
        console.log(err.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-pink-200 bg-custom p-4">
      <Helmet>
        <title>Login | One Piece</title>
      </Helmet>

      <div className="w-96 p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Login Form
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col">
          {/* Email Input */}
          <div className="relative border-b-2 border-white mb-6">
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-white p-2 placeholder-white"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="relative border-b-2 border-white mb-6">
            <input
              type="password"
              name="password"
              required
              className="w-full bg-transparent border-none outline-none text-white p-2 placeholder-white"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-white mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a
              onClick={() => setShowResetForm(true)} // Show reset form
              className="text-pink-100 hover:underline cursor-pointer"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-3 rounded-full hover:bg-opacity-80 transition-all"
          >
            Log In
          </button>

          {/* Error Message */}
          {error.login && (
            <p className="text-red-400 text-sm mt-2 text-center">{error.login}</p>
          )}

          {/* Register Link */}
          <p className="text-white text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-pink-100 hover:underline">
              Register
            </Link>
          </p>

          {/* Google Login */}
          <p
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-2 cursor-pointer text-white bg-gray-700 bg-opacity-50 py-2 px-4 rounded-full mt-4 hover:bg-opacity-70 transition-all"
          >
            <FcGoogle className="text-2xl" /> Log in with Google
          </p>
        </form>

        {/* Password Reset Form */}
        {showResetForm && (
          <div className="mt-6 text-white">
            <h3 className="text-xl mb-4">Reset Password</h3>
            <form onSubmit={handleResetPassword} className="flex flex-col">
              <input
                type="email"
                name="resetEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 p-2 rounded bg-transparent text-white border-b-2 border-white"
                placeholder="Enter your email for reset"
              />
              {error.reset && (
                <p className="text-red-400 text-sm">{error.reset}</p>
              )}
              <button
                type="submit"
                className="w-full bg-purple-900 text-white py-2 rounded-full"
              >
                Send Reset Email
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
