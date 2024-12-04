import { connectDb } from "@/helper/db";
import { getErrorResponse } from "@/helper/errorResponse";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// Connecting with DB, By calling the function.
connectDb();


// API - Get all the Tasks
export const GET = async (request) => {
  try {
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getErrorResponse("Error in Getting Data",404,false);
  }
};


// API - Create Task
export const POST = async (request) => {
  const {title, content, userId} = await request.json();
  try {
    const task = new Task({
        title, content, userId
    });

    const createdTask = await task.save();

    return NextResponse.json(createdTask, {
        status : 201,
    })
  } catch (error) {
    console.log(error);
    return NextResponse.json({
        message : "Failed to create Task !!!!",
        success : false,
    });
  }
};


// API - Update & Delete any Task - Using Dynamic Route Concept : See [taskId]