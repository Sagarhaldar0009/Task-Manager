"use client";

import Link from 'next/link'; // We use this in NextJs, so the page didn't get Refreshed.
import React from 'react'

const CustomNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-20 py-4 flex justify-between">
        <div>
            <Link href="/"className="hover:text-blue-400 text-2xl">
                Task Manager
            </Link>
        </div>
        <div>
            <ul className="flex justify-center space-x-6">
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
            </ul>
        </div>
        <div>
            <ul className="flex justify-center space-x-6">
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
            </ul>   
        </div>   
    </nav>
  )
}

export default CustomNavbar