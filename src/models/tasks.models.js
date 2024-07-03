import {model, Schema} from "mongoose";

const taskSchema = new Schema({
    title:{
        type: String,
        required: true,
        default:""
    },

    description:{
        type: String,
        required: true,
        default:""
    },

    dueDate:{
        type: String,
        required: true,        
    }
},{
    timestamps: true
})

export const Tasks = model("Task", taskSchema);