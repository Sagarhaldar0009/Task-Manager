// "use client"
// import Image from 'next/image'
// import React, {useState} from 'react'
// import signUpIcon from "../../assets/signup-icon.svg"
// import { toast } from 'react-toastify'
// import { signUp } from '@/services/userService'

// const SignUp = () => {

//     const [data, setData] = useState({
//         name:"",
//         email:"",
//         password:"",
//         about:"",
//         profileUrl:"https://static.thenounproject.com/png/5034901-200.png" // Temporary Link of Profile
//     });

//     const doSignUp = async (event) => {
//         event.preventDefault();
//         // console.log(event);
//         // console.log(data);
//         // INPUT VALIDATION
//         if(data.name.trim() === "" || data.name == null){
//             toast.warning("Name is Required")
//             return;
//         }

//         // Form Submit
//         try {
//             const result = await signUp(data);
//             // console.log(result);
//             toast.success("User is Registered !!");

//             setData({
//                 name:"",
//                 email:"",
//                 password:"",
//                 about:"",
//                 profileUrl:"https://res.cloudinary.com/dvuuccuaj/image/upload/v1721475609/Portfolio/HomePage_Profile_Pic.png" // Temporary Link of Profile
//             })

//         } catch (error) {
//             console.log(error);
//             toast.error("SignUp Error !! "+ error.response.data.message)
//         }
//     }

//     const resetForm = () =>{
//         setData({
//             name:"",
//             email:"",
//             password:"",
//             about:"",
//             profileUrl:"https://res.cloudinary.com/dvuuccuaj/image/upload/v1721475609/Portfolio/HomePage_Profile_Pic.png" // Temporary Link of Profile
//         })
//     }

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black px-4'>
//       <div className='bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-md w-full p-6 sm:p-8'>
//         <div className='flex flex-col items-center'>
//           <Image 
//             src={signUpIcon} 
//             alt="SignUp Icon" 
//             className='w-20 h-20 mb-4'
//           />
//           <h1 className='text-2xl font-bold text-white'>Sign Up</h1>
//         </div>
//         <form action='#!' className='mt-6' onSubmit={doSignUp}>
//           {/* Username */}
//           <div className='mt-4'>
//             <label htmlFor='user_name' className='block text-sm font-medium text-gray-400'>Username</label>
//             <input 
//               id='user_name'
//               type='text' 
//               className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm" 
//               placeholder='Enter Username'
//               name='user_name'
//               onChange={(event) => {
//                 setData({
//                   ...data,
//                   name : event.target.value,
//                 })
//               }}
//               value={data.name}
//             />
//           </div>
//           {/* Email */}
//           <div className='mt-4'>
//             <label htmlFor='user_email' className='block text-sm font-medium text-gray-400'>Email</label>
//             <input 
//               id='user_email' 
//               type='email' 
//               className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm" 
//               placeholder='Enter Email Address'
//               name='user_email'
//               onChange={(event) => {
//                 setData({
//                   ...data,
//                   email : event.target.value,
//                 })
//               }}
//               value={data.email}
//             />
//           </div>
//           {/* Password */}
//           <div className='mt-4'>
//             <label htmlFor='user_password' className='block text-sm font-medium text-gray-400'>Password</label>
//             <input 
//               id='user_password'
//               type='password' 
//               className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm" 
//               placeholder='Enter Password'
//               name='user_password'
//               onChange={(event) => {
//                 setData({
//                   ...data,
//                   password : event.target.value,
//                 })
//               }}
//               value={data.password}
//             />
//           </div>
//           {/* About Section */}
//           <div className='mt-4'>
//             <label htmlFor='user_about' className='block text-sm font-medium text-gray-400'>About</label>
//             <textarea 
//               id='user_about' 
//               rows={5} 
//               name='user_about' 
//               className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm" 
//               placeholder='Write About Yourself...' 
//               onChange={(event) => {
//                 setData({
//                   ...data,
//                   about : event.target.value,
//                 })
//               }}
//               value={data.about}
//             />
//           </div>
//           {/* Buttons */}
//           <div className='mt-6 flex justify-between'>
//             <button 
//               type='submit' 
//               className='px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg'>
//               Sign Up
//             </button>
//             <button 
//               type='reset' 
//               onClick={resetForm}
//               className='px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors shadow-lg'>
//               Reset
//             </button>
//           </div>
//             {/* Printing the Input Data, just to check our form is working or not? */}
//             {/* <div className='text-white'>
//                 {
//                     JSON.stringify(data)
//                 }
//             </div>  */}
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp



"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import signUpIcon from "../../assets/signup-icon.svg";
import { toast } from 'react-toastify';
import { signUp } from '@/services/userService';

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileUrl: "https://static.thenounproject.com/png/5034901-200.png" // Temporary Link of Profile
  });

  const doSignUp = async (event) => {
    event.preventDefault();
    // INPUT VALIDATION
    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Name is Required");
      return;
    }

    // Form Submit
    try {
      const result = await signUp(data);
      toast.success("User is Registered !!");

      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileUrl: "https://static.thenounproject.com/png/5034901-200.png" // Temporary Link of Profile
      });
    } catch (error) {
      console.log(error);
      toast.error("SignUp Error !! " + error.response.data.message);
    }
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileUrl: "https://static.thenounproject.com/png/5034901-200.png" // Temporary Link of Profile
    });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black px-4 md:px-8 py-12 md:py-10 '>
      <div className='bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-md w-full p-6 sm:p-8'>
        <div className='flex flex-col items-center mb-6'>
          <Image 
            src={signUpIcon} 
            alt="SignUp Icon" 
            className='w-20 h-20 mb-4'
          />
          <h1 className='text-2xl font-bold text-white'>Sign Up</h1>
        </div>
        <form action='#!' className='space-y-6' onSubmit={doSignUp}>
          {/* Username */}
          <div>
            <label htmlFor='user_name' className='block text-sm font-medium text-gray-400'>Username</label>
            <input 
              id='user_name'
              type='text' 
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm" 
              placeholder='Enter Username'
              name='user_name'
              onChange={(event) => {
                setData({
                  ...data,
                  name: event.target.value,
                });
              }}
              value={data.name}
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor='user_email' className='block text-sm font-medium text-gray-400'>Email</label>
            <input 
              id='user_email' 
              type='email' 
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm" 
              placeholder='Enter Email Address'
              name='user_email'
              onChange={(event) => {
                setData({
                  ...data,
                  email: event.target.value,
                });
              }}
              value={data.email}
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor='user_password' className='block text-sm font-medium text-gray-400'>Password</label>
            <input 
              id='user_password'
              type='password' 
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm" 
              placeholder='Enter Password'
              name='user_password'
              onChange={(event) => {
                setData({
                  ...data,
                  password: event.target.value,
                });
              }}
              value={data.password}
            />
          </div>
          {/* About Section */}
          <div>
            <label htmlFor='user_about' className='block text-sm font-medium text-gray-400'>About</label>
            <textarea 
              id='user_about' 
              rows={5} 
              name='user_about' 
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm" 
              placeholder='Write About Yourself...' 
              onChange={(event) => {
                setData({
                  ...data,
                  about: event.target.value,
                });
              }}
              value={data.about}
            />
          </div>
          {/* Buttons */}
          <div className='flex flex-col sm:flex-row sm:justify-between'>
            <button 
              type='submit' 
              className='w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg mb-3 sm:mb-0'>
              Sign Up
            </button>
            <button 
              type='reset' 
              onClick={resetForm}
              className='w-full sm:w-auto px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors shadow-lg'>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;