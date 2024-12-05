"use client";
import React, { useState } from "react";
import addTaskIcon from "../../assets/add-task-icon.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";

const AddTask = () => {

  const [task, setTask] = useState({
    title : "",
    content : "",
    status : "none",
    userId : "67516a91c43e564108e18009", // Temporary Solution - Sagar Haldar's object I'd.
  });

  const handleAddTask = async (event) => {
    event.preventDefault();
    // console.log(task);

    // Validation on Task Data

    try {
      // addTask -> Post API to store data in DB.
      const result = await addTask(task);
      console.log(result);
      toast.success("Your Task is Added", {
        position:"top-right",
      });

      setTask({
        title:"",
        content:"",
        status:"none",
      })

    } catch (error) {
      console.log(error);
      toast.error("Task is Not Added", {
        position:"top-right",
      })
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-8 max-w-lg w-full">
        {/* Icon and Heading */}
        <div className="flex flex-col items-center">
          <Image src={addTaskIcon} alt="Add Task Icon" className="w-16 h-16 mb-4" />
          <h1 className="text-2xl font-bold mb-6">Add Your Task Here!</h1>
        </div>

        {/* Form */}
        <form action="#!" onSubmit={handleAddTask} className="space-y-6">
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
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title : event.target.value,
                })
              }}
              value={task.title}
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
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content : event.target.value,
                })
              }}
              value={task.content}
            />
          </div>

          {/* Task Status */}
          <div>
            <label htmlFor="task_status" className="block text-sm font-medium mb-2">
              Status
            </label>
            <select
              id="task_status"
              // defaultValue="none"
              className="w-full p-3 rounded-2xl bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status : event.target.value,
                })
              }}
              value={task.status}
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
        {/* {
          JSON.stringify(task)
        } */}
      </div>
    </div>
  );
};

export default AddTask;
