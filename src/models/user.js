import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: String,
    email : {
        type : String,
        required : [true,"Email is Required !!!"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Password is Required !!!"]
    },
    about : {
        type : String
    },
    profileUrl : {
        type : String
    }
});

export const User = mongoose.models.users || mongoose.model("users", UserSchema);