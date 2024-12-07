// "use client";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="h-auto bg-slate-800 text-white py-10 px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Welcome Section */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Welcome to Task Manager</h2>
//           <p className="text-gray-300">
//             Task Manager is your ultimate tool to stay organized and productive.
//             Plan, track, and accomplish your tasks with ease.
//           </p>
//         </div>

//         {/* Address Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Our Office</h3>
//           <p className="text-gray-300">
//             123 Task Avenue, Productivity City,<br />
//             Workflow State, 45678<br />
//             Email: info@taskmanager.com<br />
//             Phone: +123 456 7890
//           </p>
//         </div>

//         {/* Social Media Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="https://www.linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-blue-400 transition"
//               >
//                 LinkedIn
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-pink-400 transition"
//               >
//                 Instagram
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-blue-600 transition"
//               >
//                 Facebook
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.youtube.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-red-600 transition"
//               >
//                 YouTube
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="mt-10 text-center text-gray-400 text-sm">
//         &copy; {new Date().getFullYear()} Task Manager. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 w-full bg-slate-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Welcome Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Welcome to Task Manager</h2>
          <p className="text-gray-300">
            Task Manager is your ultimate tool to stay organized and productive.
            Plan, track, and accomplish your tasks with ease.
          </p>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Office</h3>
          <p className="text-gray-300">
            123 Task Avenue, Productivity City,<br />
            Workflow State, 45678<br />
            Email: info@taskmanager.com<br />
            Phone: +123 456 7890
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-600 transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-600 transition"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Task Manager. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
