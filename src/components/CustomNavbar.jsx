// "use client";

// import UserContext from '@/contextAPI/userContext';
// import { logout } from '@/services/userService';
// import Link from 'next/link'; // We use this in NextJs, so the page didn't get Refreshed.
// import { useRouter } from 'next/navigation';
// import React, { useContext } from 'react'
// import { toast } from 'react-toastify';

// const CustomNavbar = () => {

//   // Context of User (i.e, Payload) -> using ContextAPI
//   const context = useContext(UserContext);
//   console.log("PAYLOAD ON NAVBAR -> ",context);

//   const router = useRouter(); 

//   async function doLogout() {
//     try {
//       const result = await logout();
//     //   console.log(result);
//       context.setUser(undefined);
//       toast.success("Logged Out Successfully !!!")
//       router.push("/");
//     } catch (error) {
//       console.log(error);
//       toast.error("Error in LogOut");
//     }
//   }


//   return (
//     <nav className="bg-gray-800 text-white px-20 py-4 flex justify-between">
//         <div>
//             <Link href="#!"className="hover:text-blue-400 text-2xl">
//                 Task Manager
//             </Link>
//         </div>
//         <div>
//             <ul className="flex justify-center space-x-6">
//                 {
//                     // If the User is Logged In (user === some data) , then show "Home","Add-Task","Show-Task" on NavBar
//                     context.user && (
//                         <>
//                             <li>
//                                 <Link href="/"className="hover:text-blue-400">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/add-task" className="hover:text-blue-400">
//                                     Add Task
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/show-task" className="hover:text-blue-400">
//                                     Show Tasks
//                                 </Link>
//                             </li>
//                         </>
//                     )
//                 }
                
//             </ul>
//         </div>
//         <div>
//             <ul className="flex justify-center space-x-6">
//                 {
//                     // If the User if LoggedIn, then show the LogOut Button on NavBar
//                     context.user && (
//                         <>
//                             <li>
//                                 <Link href={"#!"}>{context.user.name}</Link>
//                             </li>
//                             <li>
//                                 <button onClick={doLogout}>Logout</button>
//                             </li>
//                         </>
//                     )
//                 }

//                 {   
//                     // If the User is Not Logged In (user === undefined), then Only show the "Login" & "SignUp" Links for Logging In.
//                     !context.user &&
//                     (
//                         <>
//                             <li>
//                                 <Link href="/login"className="hover:text-blue-400">
//                                     Login
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/signup" className="hover:text-blue-400">
//                                     Sign Up
//                                 </Link>
//                             </li>
//                         </>
//                     )   
//                 }
//             </ul>   
//         </div>   
//     </nav>
//   )
// }

// export default CustomNavbar


// "use client";

// import UserContext from "@/contextAPI/userContext";
// import { logout } from "@/services/userService";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useContext, useState } from "react";
// import { toast } from "react-toastify";
// import { FiMenu, FiX } from "react-icons/fi";

// const CustomNavbar = () => {
//   const context = useContext(UserContext);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const router = useRouter();

//   async function doLogout() {
//     try {
//       const result = await logout();
//       context.setUser(undefined);
//       toast.success("Logged Out Successfully !!!");
//       router.push("/");
//     } catch (error) {
//       console.error(error);
//       toast.error("Error in LogOut");
//     }
//   }

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-4">
//           <Link href="#!" className="text-xl md:text-2xl font-semibold hover:text-blue-400">
//             Task Manager
//           </Link>
//         </div>

//         {/* Hamburger Icon for Small Screens */}
//         <div className="md:hidden">
//           <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
//             {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>

//         {/* Links for Large Screens */}
//         <div className="hidden md:flex space-x-6">
//           {context.user && (
//             <>
//               <Link href="/" className="hover:text-blue-400">
//                 Home
//               </Link>
//               <Link href="/add-task" className="hover:text-blue-400">
//                 Add Task
//               </Link>
//               <Link href="/show-task" className="hover:text-blue-400">
//                 Show Tasks
//               </Link>
//             </>
//           )}
//           {context.user ? (
//             <>
//               <Link href="#!" className="hover:text-blue-400 flex items-center space-x-2">
//                 <img
//                   src="/path-to-user-icon.png"
//                   alt="User Icon"
//                   className="w-6 h-6 rounded-full"
//                 />
//                 <span>{context.user.name}</span>
//               </Link>
//               <button
//                 onClick={doLogout}
//                 className="hover:text-red-400 text-sm md:text-base"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link href="/login" className="hover:text-blue-400">
//                 Login
//               </Link>
//               <Link href="/signup" className="hover:text-blue-400">
//                 Sign Up
//               </Link>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="bg-gray-700 text-white md:hidden">
//           <ul className="space-y-4 p-4">
//             {context.user && (
//               <>
//                 <li>
//                   <Link href="/" className="hover:text-blue-400 block">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/add-task" className="hover:text-blue-400 block">
//                     Add Task
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/show-task" className="hover:text-blue-400 block">
//                     Show Tasks
//                   </Link>
//                 </li>
//               </>
//             )}
//             {context.user ? (
//               <>
//                 <li className="flex items-center space-x-2">
//                   <img
//                     src="/path-to-user-icon.png"
//                     alt="User Icon"
//                     className="w-6 h-6 rounded-full"
//                   />
//                   <span>{context.user.name}</span>
//                 </li>
//                 <li>
//                   <button
//                     onClick={doLogout}
//                     className="hover:text-red-400 block text-sm"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link href="/login" className="hover:text-blue-400 block">
//                     Login
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/signup" className="hover:text-blue-400 block">
//                     Sign Up
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default CustomNavbar;


"use client";

import UserContext from "@/contextAPI/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { FiMenu, FiX } from "react-icons/fi";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  async function doLogout() {
    try {
      const result = await logout();
      context.setUser(undefined);
      toast.success("Logged Out Successfully !!!");
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Error in LogOut");
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="#!" className="text-xl md:text-2xl font-semibold hover:text-blue-400">
            Task Manager
          </Link>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Links for Large Screens */}
        <div className="hidden md:flex space-x-6">
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
          {context.user ? (
            <>
              <Link href="#!" className="hover:text-blue-400 flex items-center space-x-2">
                <img
                  src="/path-to-user-icon.png"
                  alt="User Icon"
                  className="w-6 h-6 rounded-full"
                />
                <span>{context.user.name}</span>
              </Link>
              <button
                onClick={doLogout}
                className="hover:text-red-400 text-sm md:text-base"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-blue-400">
                Login
              </Link>
              <Link href="/signup" className="hover:text-blue-400">
                Sign Up
              </Link>
            </>
          )}
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
                <li className="flex items-center space-x-2">
                  <img
                    src="/path-to-user-icon.png"
                    alt="User Icon"
                    className="w-6 h-6 rounded-full"
                  />
                  <span>{context.user.name}</span>
                </li>
                <li>
                  <button
                    onClick={doLogout}
                    className="hover:text-red-400 block text-sm"
                  >
                    Logout
                  </button>
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
    </nav>
  );
};

export default CustomNavbar;

