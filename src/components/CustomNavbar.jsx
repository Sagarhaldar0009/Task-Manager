"use client";

import UserContext from "@/contextAPI/userContext";
// import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
// import { toast } from "react-toastify";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-gray-800 text-white shadow-md z-50 mx-auto">

    <div className="max-w-6xl mx-auto">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="#!" className="text-xl md:text-2xl font-semibold hover:text-blue-400">
            Task Manager
          </Link>
        </div>

          {/* Links for Large Screens */}
    <div className="hidden md:flex space-x-8">
      {context.user && (
        <>
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/add-task" className="hover:text-blue-400">
            Add Task
          </Link>
          <Link href="/show-task" className="hover:text-blue-400">
            Show Tasks
          </Link>
        </>
      )}
    </div>

{/* Admin Section */}
<div className="hidden md:flex items-center space-x-2">
      {context.user ? (
        <Link href="/profile" className="hover:text-blue-400 flex items-center space-x-2">
          <FaUserAlt />
          <span>{" "}Admin</span>
        </Link>
      ) :
      (
        <div className="flex gap-x-4">
              <Link href="/login" className="hover:text-blue-400">
                Login
              </Link>
              <Link href="/signup" className="hover:text-blue-400">
                Sign Up
              </Link>
            </div>
      )
      }
    </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-gray-700 text-white md:hidden">
          <ul className="space-y-4 p-4">
            {context.user && (
              <>
                <li>
                  <Link href="/" className="hover:text-blue-400 block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/add-task" className="hover:text-blue-400 block">
                    Add Task
                  </Link>
                </li>
                <li>
                  <Link href="/show-task" className="hover:text-blue-400 block">
                    Show Tasks
                  </Link>
                </li>
              </>
            )}
            {context.user ? (
              <>
                <li>
                  <Link href="/profile" className="flex items-center space-x-2 hover:text-blue-400">
                    <FaUserAlt/><span>{" "}Admin</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" className="hover:text-blue-400 block">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="hover:text-blue-400 block">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
        </div>  
     
    </nav>
  );
};

export default CustomNavbar;