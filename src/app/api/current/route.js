// Using an API - to get the Current LoggedIn User's data (by using cookie - to fetch the authToken)

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";

export async function GET(request){
    const authToken = request.cookies.get("authToken")?.value;
    console.log("Current LoggedIn User's Token -> ",authToken);

    // data -> i.e, User's Detail -> i.e, payload
    const data = jwt.verify(authToken, process.env.JWT_Secret_Key);
    console.log("Logged In User's Detail (Payload) :",data);

    const userDetail = await User.findById(data._id).select("-password");

    return NextResponse.json(userDetail);
}