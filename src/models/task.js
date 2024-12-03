import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
    title: {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    // addedDate : {
    //     type:Date,
    //     required : true,
    //     default : Date.now(),
    // },
    addedDate: {
        type: Date,
        required: true,
        default: () => Date.now(), // Use a function to set the default value dynamically
    },
    status : {
        type : String,
        enum:["Pending", "Completed"],
        default : "Pending",
        required : true,
    },
    // To Link each task with it's Corresponding User who created it.
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Use Schema.Types.ObjectId for references
        ref: "users", // Optionally, add a reference to the "users" collection
        required: true,
    },
    // userId : {
    //     type : mongoose.ObjectId,
    //     required : true,
    // }
});

export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema);