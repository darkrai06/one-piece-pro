import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyAuthProviderContext } from "./AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(MyAuthProviderContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User sign Out Successfully");
      })
      .catch((err) => console.log(err.message));
  };
  const links = (
    <>
      <li>
        <NavLink to="/" className="text-xl">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="text-xl">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="text-xl">
          Register
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/profile" className="text-xl">
              User Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar sm:navbar-center flex justify-between">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost font-extrabold text-xl hidden md:hidden lg:flex">
          ONE PIECE PRO
        </Link>
      </div>
      <div className="hidden lg:flex lg:justify-end">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="">
        {user && user?.email ? (
          <>
            <div className="flex items-center gap-2">+6
              <div className="hidden lg:flex">
                <p>User : {user?.displayName}</p>
              </div>
              <div className="hidden lg:flex">
                <img
                  className="w-14 rounded-full border"
                  title={user?.displayName}
                  alt={user?.displayName}
                  src={user?.photoURL}
                />
              </div>
            </div>
            <div>
              <NavLink onClick={handleSignOut} className="btn">
                Sign Out
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn">
              Log In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

