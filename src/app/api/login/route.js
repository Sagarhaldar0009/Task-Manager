import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

connectDb();

export const POST = async (request) => {
    const {email, password} = await request.json();

    try {
        // 1. Find User (ID) from DB using unique Email Id.
        const user = await User.findOne({
            email:email,
        })
        console.log("User Data (Login API) -> ",user);
        // If don't get any User corresponding to Input Email Address
        if(user == null){
            throw new Error("User Not Found")
        }
        // 2. checking the password is matched or not?
        const matched = bcrypt.compareSync(password, user.password)
        if(!matched){
            throw new Error("Password not matched !!!");
        }

        // 3. Generate JWT token
        const token = jwt.sign({
            _id : user._id,
            name: user.name
        }, process.env.JWT_Secret_Key);
        console.log("TOKEN -> ",token);

        // 4. Send this Token as a NextResponse by using cookies or header (Read NextJs Documentation for using NextResponse - Cookies)
        const response = NextResponse.json({
            message:"Logged In Successfully !!!",
            success: true,
        });
        // authToken -> token name in cookie
        response.cookies.set("authToken", token, {
            expiresIn:"1d",
            httpOnly:true,
        })

        return response;


    } catch (error) {
        return NextResponse.json({
            message:error.message,
            success: false
        },{
            status:500,
        })
    }
};