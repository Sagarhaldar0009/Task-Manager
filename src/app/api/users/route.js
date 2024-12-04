import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

// Connecting with DB, By calling the function.
connectDb();

export const GET = async (request) => {
  try {
    // Fetch users from the database
    const users = await User.find().lean().select("-password"); // Use .lean() to convert documents to plain objects
    return NextResponse.json({ users, status: true });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({
      message: "Failed to fetch users",
      status: false,
    });
  }
};

export const DELETE = (request) => {
    console.log("Users Delete API called");
    return NextResponse.json({
        message:"Deleted Successfully",
        status:true
    });
}

export const POST = async (request) => {
  // Fetch user detail from Request
  const {name, email, password, about, profileUrl} = await request.json();

  // create User Object with user model
    const user = new User({
      name, 
      email, 
      password, 
      about, 
      profileUrl
    });

    try{
      // Save the Object in DB
      const createdUser = await user.save();

      const response = NextResponse.json(user, {
        status : 201,
      });

      return response;
    }
    catch(error){
      console.log(error);
      return NextResponse.json({
        message : "Failed to create User",
        status : false
      },{
        status:500,
      })
    }
};

export const PUT = (request) => {
  
};
