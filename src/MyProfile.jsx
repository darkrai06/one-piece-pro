import React, { useContext, useState } from "react";
import { MyAuthProviderContext } from "./AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(
    MyAuthProviderContext
  );
  return (
    <div>
    <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    <div className="hero-content flex-col">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl text-center">User Information</h1>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={user.photoURL} alt="User-image" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">User Name: {user.displayName}</h2>
            <p>Email: {user.email}</p>
          </div>
        </div>
      </div>

      <Link to={"/updateprofile"}>
        <button className="btn btn-primary">Update Your Profile</button>
      </Link>
    </div>
    </div>
  );
};

export default MyProfile;
