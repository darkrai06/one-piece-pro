import React, { useContext, useState } from "react";
import { MyAuthProviderContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import './back.css'

const Register = () => {
  const { createUser, updateUserProfile } = useContext(MyAuthProviderContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name.length < 5) {
      setError({ ...error, name: "Name must be at least 5 characters long" });
      return;
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
      toast("Password must be at least 6 characters, with one uppercase & one lowercase letter");
      return;
    }
    createUser(email, password)
      .then((result) => console.log(result.user))
      .then(() => {
        toast("Welcome! Successfully Registered");
        navigate("/");
        updateUserProfile({ displayName: name, photoURL: photo });
      })
      .catch((err) => {
        toast("Oops! Registration Failed. Try Again");
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-pink-200 bg-custom p-4">
      <Helmet>
        <title>Register | One Piece</title>
      </Helmet>

      <div className="w-96 p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Register
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col">
          {/* Name Input */}
          <div className="relative border-b-2 border-white mb-6">
            <input
              type="text"
              name="name"
              required
              className="w-full bg-transparent border-none outline-none text-white p-2 placeholder-white"
              placeholder="Enter your name"
            />
          </div>
          {error.name && <p className="text-red-400 text-sm">{error.name}</p>}

          {/* Photo URL Input */}
          <div className="relative border-b-2 border-white mb-6">
            <input
              type="text"
              name="photo"
              required
              className="w-full bg-transparent border-none outline-none text-white p-2 placeholder-white"
              placeholder="Enter your photo URL"
            />
          </div>

          {/* Email Input */}
          <div className="relative border-b-2 border-white mb-6">
            <input
              type="email"
              name="email"
              required
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

          {/* Forgot Password */}
          <div className="text-right text-white mb-6">
            <a href="#" className="text-pink-100 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-3 rounded-full hover:bg-opacity-80 transition-all"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="text-white text-center mt-4">
            Already registered?{" "}
            <Link to="/login" className="text-pink-100 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
