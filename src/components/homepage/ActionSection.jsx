// "use client";
// import React from "react";
// import imageBanner from "../../assets/signup-icon.svg";
// import Image from "next/image";
// const ActionSection = () => {
//   return (
//     <div className="relative bg-blue-500 text-white py-20">
//       <div className="absolute top-0 left-0 w-full h-full z-10 bg-opacity-70 bg-blue-500"></div>
//       <div className="container mx-auto text-center relative z-20">
//         <h2 className="text-3xl font-semibold text-center mb-8">
//           Take Control of Your Tasks
//         </h2>
//         <p className="text-xl text-center mb-8">
//           Start managing your tasks efficiently with our task manager app.
//         </p>
//         <button
//           className="bg-white text-blue-500 py-3 px-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
//           onClick={() => {
//             // Add your action button click event handler logic here
//             console.log("Get Started button clicked!");
//           }}
//         >
//           Get Started
//         </button>
//       </div>
//       <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30">
//         <Image
//           src={imageBanner} // Replace with the actual path to your image
//           alt="Action Background"
//           className="object-cover w-full h-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default ActionSection;

"use client";
import React from "react";
import imageBanner from "../../assets/signup-icon.svg";
import Image from "next/image";

const ActionSection = () => {
  return (
    <div className="relative bg-blue-500 text-white py-16 md:py-20">
      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30">
        <Image
          src={imageBanner} // Replace with the actual path to your image
          alt="Action Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div className="text-center md:text-left md:max-w-md lg:max-w-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              Take Control of Your Tasks
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Start managing your tasks efficiently with our task manager app.
            </p>
            <button
              className="bg-white text-blue-500 py-3 px-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
              onClick={() => {
                console.log("Get Started button clicked!");
              }}
            >
              Get Started
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={imageBanner} // Replace with the actual path to your image
              alt="Task Management Illustration"
              className="w-48 md:w-64 lg:w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionSection;