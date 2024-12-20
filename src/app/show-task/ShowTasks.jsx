"use client";
import UserContext from "@/contextAPI/userContext";
import { deleteTask, getTasksOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { toast } from "react-toastify";

export const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);

  // Fetch all tasks for a specific user
  async function loadTasks(userId) {
    try {
      const tasks = await getTasksOfUser(userId);
      setTasks([...tasks].reverse());
      console.log("All the Task -> ", tasks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  // Delete task handler
  async function deleteTaskParent(taskId) {
    try {
      await deleteTask(taskId);
      const updatedTasks = tasks.filter((item) => item._id !== taskId);
      setTasks(updatedTasks);
      toast.success("Your task is deleted!");
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting task!");
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">
        Your Tasks <span className="text-blue-500">({tasks.length})</span>
      </h1>

      <div className="grid gap-6 w-full max-w-4xl sm:grid-cols-2">
        {tasks.map((task) => (
          <Task key={task._id} task={task} deleteTaskParent={deleteTaskParent} />
        ))}
      </div>
    </div>
  );
};