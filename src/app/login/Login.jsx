// "use client";

// import UserContext from '@/contextAPI/userContext';
// import { login } from '@/services/userService';
// import { useRouter } from 'next/navigation';
// import React, {useState, useContext} from 'react'
// import { toast } from 'react-toastify';

// const Login = () => {

//   const router = useRouter();

//   const context = useContext(UserContext)

//   const [data, setData] = useState({
//     email: "",
//     password: ""
//   })

//   // // Ensure this runs only on the client side
//   // useEffect(() => {
//   //   // This code will only run on the client side
//   // }, []);

//   const handleLogin = async (event)=>{
//     event.preventDefault();
//     // console.log(data);
//     // Input Validation
//     if(data.email.trim() === "" || data.password.trim()===""){
//       toast.info("Please Enter Correct Data");
//       return;
//     }

//     // Data is Correct - Now Login
//     try {
//       const result = await login(data);
//       console.log(result);
//       toast.success("Logged In Successfully !!!");
//       context.setUser(result.user);
//       // After Logged In, Redirect to Home Page.
//       router.push("/profile/user")

//     } catch (error) {
//       console.log(error);
//       toast.error(error.response.data.message);
//     }
//   }

//   return (
//     <div className='grid grid-cols-12 bg-slate-800'>
//       <div className='col-span-4 col-start-5'>
//         <div className='py-5 flex justify-center'>
//           <h1 className='text-2xl font-bold text-white'>Login Page</h1>
//         </div>
//         <form action='#!' className='mt-6' onSubmit={handleLogin}>
//           {/* Email */}
//           <div className='mt-4'>
//             <label htmlFor='user_email' className='block text-sm font-medium text-gray-400'>Email</label>
//             <input 
//               id='user_email' 
//               type='email' 
//               className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm" 
//               placeholder='Enter Email Address'
//               name='user_email'
//               // Data Binding
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
//           {/* Buttons */}
//           <div className='mt-6 flex justify-between'>
//             <button 
//               type='submit' 
//               className='px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg'>
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login


"use client";

import UserContext from '@/contextAPI/userContext';
import { login } from '@/services/userService';
import { useRouter } from 'next/navigation';
import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const router = useRouter();
  const context = useContext(UserContext);

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    // Input Validation
    if (data.email.trim() === "" || data.password.trim() === "") {
      toast.info("Please Enter Correct Data");
      return;
    }

    // Data is Correct - Now Login
    try {
      const result = await login(data);
      console.log(result);
      toast.success("Logged In Successfully !!!");
      context.setUser(result.user);
      // After Logged In, Redirect to Home Page.
      router.push("/profile");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-slate-800 px-4 md:px-8'>
      <div className='w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg'>
        <div className='py-5 text-center'>
          <h1 className='text-2xl font-bold text-white'>Login Page</h1>
        </div>
        <form className='mt-6' onSubmit={handleLogin}>
          {/* Email */}
          <div className='mt-4'>
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
          <div className='mt-4'>
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
          {/* Buttons */}
          <div className='mt-6'>
            <button 
              type='submit' 
              className='w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;