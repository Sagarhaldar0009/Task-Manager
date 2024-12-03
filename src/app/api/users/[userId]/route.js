// Learning About Dynamic Routes


// API for deleting the User
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
    const { userId } = params; // Extract the dynamic parameter 'id' from params 
    try {
        await User.deleteOne({
            _id: userId
        });
        return NextResponse.json({
            message: "User Deleted Successfully",
            status: true,
        });
    } catch (error) {
        return NextResponse.json({
            message: "Error in Deleting User",
            status: false,
        });
    }
}


// export const GET = async (request, {params}) => {
//     const {userId} = params;
//     try {
//         const userDetails = await User.findById(userId);
//         return NextResponse.json(userDetails);
//     } catch (error) {
//         return NextResponse.json({
//             message:"Error in Fetching Particular User",
//             status:false,
//         });
//     }
// }


// export const GET = async (request, context) => {
//     const { params } = context; // Extract params from context
//     const { userId } = params;
//     try {
//         const userDetails = await User.findById(userId);
//         if (!userDetails) {
//             return NextResponse.json({
//                 message: "User not found",
//                 status: false,
//             });
//         }
//         return NextResponse.json(userDetails);
//     } catch (error) {
//         console.error("Error fetching user:", error);
//         return NextResponse.json({
//             message: "Error in fetching particular user",
//             status: false,
//         });
//     }
// };



// Better code (less error in code) to get the details
export const GET = async (request, { params }) => {
    // Ensure params is awaited
    const userId = (await params).userId;
    try {
        const userDetails = await User.findById(userId);
        if (!userDetails) {
            return NextResponse.json({
                message: "User not found",
                status: false,
            });
        }
        return NextResponse.json(userDetails);
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({
            message: "Error in fetching user details",
            status: false,
        });
    }
};


// API to update user
export const PUT = async (request, { params }) => {
    const {userId} = params;

    const {name, password, about, profileUrl} = await request.json();

    try {
        const UpdatedDetails = await User.findById(userId);

        UpdatedDetails.name = name;
        UpdatedDetails.password = password;
        UpdatedDetails.about = about;
        UpdatedDetails.profileUrl = profileUrl;

        const updatedUser = await UpdatedDetails.save();

        return NextResponse.json(updatedUser);
        
    } catch (error) {
        return NextResponse.json({
            message:"Failed to update user!!!",
            success:false
        })
    }
}