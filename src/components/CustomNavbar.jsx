"use client";

import UserContext from '@/contextAPI/userContext';
import Link from 'next/link'; // We use this in NextJs, so the page didn't get Refreshed.
import React, { useContext } from 'react'

const CustomNavbar = () => {
  // Context of User (i.e, Payload) -> using ContextAPI
  const context = useContext(UserContext);
  console.log("PAYLOAD ON NAVBAR -> ",context);

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
  }


  return (
    <nav className="bg-gray-800 text-white px-20 py-4 flex justify-between">
        <div>
            <Link href="#!"className="hover:text-blue-400 text-2xl">
                Task Manager
            </Link>
        </div>
        <div>
            <ul className="flex justify-center space-x-6">
                {
                    // If the User is Logged In, then show "Home","Add-Task","Show-Task" on NavBar
                    context.user && (
                        <>
                            <li>
                                <Link href="/"className="hover:text-blue-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/add-task" className="hover:text-blue-400">
                                    Add Task
                                </Link>
                            </li>
                            <li>
                                <Link href="/show-task" className="hover:text-blue-400">
                                    Show Tasks
                                </Link>
                            </li>
                        </>
                    )
                }
                
            </ul>
        </div>
        <div>
            <ul className="flex justify-center space-x-6">
                {
                    // If the User if LoggedIn, then show the LogOut Button on NavBar
                    context.user && (
                        <>
                            <li>
                                <Link href={"#!"}>{context.user.name}</Link>
                            </li>
                            <li>
                                <button onClick={doLogout}>Logout</button>
                            </li>
                        </>
                    )
                }

                {   
                    // If the User is Not Logged In, then Only show the "Login" & "SignUp" Links for Logging In.
                    !context.user &&
                    (
                        <>
                            <li>
                                <Link href="/login"className="hover:text-blue-400">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/signup" className="hover:text-blue-400">
                                    Sign Up
                                </Link>
                            </li>
                        </>
                    )   
                }
            </ul>   
        </div>   
    </nav>
  )
}

export default CustomNavbar