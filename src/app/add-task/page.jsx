// import React from 'react'
// import addTaskIcon from "../../assets/add-task-icon.svg"
// import Image from 'next/image'

// export const metadata = {
//     title : "Add Task - Task Manager"
// }

// const page = () => {
//   return (
//     <div className='grid grid-cols-12 justify-center'>
//       <div className='border col-span-6 col-start-4 p-5'>
//         <div>
//           <Image src={addTaskIcon} alt='addTaskIcon'/>
//         </div>
//         <h1>Add Your Task Here !!</h1>
//         <form action='#!'>
//           {/* Task Title */}
//           <div className='mt-4'>
//             <label htmlFor='task_title' className='block text-sm font-medium mb-2'>
//               Title : 
//             </label>
//             <input type='text' id='task_title' className='text-white w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-100'/>
//           </div>
//           {/* Task Content */}
//           <div className='mt-4'>
//             <label htmlFor='task_content' className='block text-sm font-medium mb-2'>
//               Content : 
//             </label>
//             <textarea rows={5} id='task_content' className='text-white w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-100'/>
//           </div>
//           {/* Task Status */}
//           <div className='mt-4'>
//             <label htmlFor='task_status' className='block text-sm font-medium mb-2'>
//               Status
//             </label>
//             <select id='task_status' defaultValue="none" className='text-white w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-100'>
//               <option value="none" disabled>---Select Status---</option>
//               <option value="Pending">Pending</option>
//               <option value="Completed">Completed</option>
//             </select>
//           </div>
//           {/* Button Actions */}
//           <div className='mt-4 flex justify-center gap-3'>
//             <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800 hover:text-white scroll-smooth'>Add Task</button>
//             <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 hover:text-white scroll-smooth'>Clear</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default page


import React from "react";
import addTaskIcon from "../../assets/add-task-icon.svg";
import Image from "next/image";

export const metadata = {
  title: "Add Task - Task Manager",
};

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-8 max-w-lg w-full">
        {/* Icon and Heading */}
        <div className="flex flex-col items-center">
          <Image src={addTaskIcon} alt="Add Task Icon" className="w-16 h-16 mb-4" />
          <h1 className="text-2xl font-bold mb-6">Add Your Task Here!</h1>
        </div>

        {/* Form */}
        <form action="#!" className="space-y-6">
          {/* Task Title */}
          <div>
            <label htmlFor="task_title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="task_title"
              className="w-full p-3 rounded-2xl bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task title"
            />
          </div>

          {/* Task Content */}
          <div>
            <label htmlFor="task_content" className="block text-sm font-medium mb-2">
              Content
            </label>
            <textarea
              rows={5}
              id="task_content"
              className="w-full p-3 rounded-2xl bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task content"
            />
          </div>

          {/* Task Status */}
          <div>
            <label htmlFor="task_status" className="block text-sm font-medium mb-2">
              Status
            </label>
            <select
              id="task_status"
              defaultValue="none"
              className="w-full p-3 rounded-2xl bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4">
            <button
              type="submit"
              className="w-full py-3 px-5 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Add Task
            </button>
            <button
              type="button"
              className="w-full py-3 px-5 bg-red-600 rounded-lg hover:bg-red-500 transition-colors"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
