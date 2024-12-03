// Multiple Dynamic Values in a single Route. [Particular User's particular post.]

import { NextResponse } from "next/server";



export const GET = async (request,{params}) => {
    const {userId, postId} = await params;
    console.log("UserId : ", userId);
    console.log("PostId : ", postId);

    return NextResponse.json({
        userId,
        postId
    });
}