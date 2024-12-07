"use client";

import React, { useContext } from "react";
import UserContext from "@/contextAPI/userContext";
import { toast } from "react-toastify";
import Link from "next/link";

const Profile = () => {
  const context = useContext(UserContext);
  const { user } = context;

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 text-lg">No user data available. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center">
      <div className="bg-gray-700 shadow-md rounded-lg p-6 w-full max-w-md">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src={user.profileUrl || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
          <h1 className="text-xl text-white font-semibold mt-4">{user.name || "No Name Available"}</h1>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          <div>
            <h2 className="text-white font-semibold">Email : </h2>
            <p className="text-white">{user.email || "No Email Provided"}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-white font-semibold">About : </h2>
            <p className="text-white">
              {user.about || "This user hasn't provided any details yet."}
            </p>
          </div>
        </div>

        {/* Portfolio Website */}
        {user.email === "sagarhaldar987@gmail.com" ? (
        <div className="flex mt-6 items-center">
            <h2 className="text-white font-semibold mr-2">Portfolio:</h2>
            <Link
            href="https://portfolio-sand-six-18.vercel.app/"
            className="text-blue-300 hover:underline"
            >
            Click here to visit the Portfolio
            </Link>
        </div>
        ) : null}

        {/* Logout Button */}
        <div className="mt-6">
          <button
            onClick={() => toast.info("Logout functionality coming soon!")}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;