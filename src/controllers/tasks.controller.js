import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Tasks } from "../models/tasks.models.js"

// create task

const createTask = asyncHandler(async (req, res)=>{

    const {title, description, dueDate} = req.body;

    if([title,description,dueDate].some((eachField) => eachField === "")){
        throw new ApiError(400, "Fields are empty");
    }

    const createdTask = await Tasks.create({
        title,
        description,
        dueDate
    })

    if(createTask){
        res.status(201).json(new ApiResponse(200,"Created Task Successfully",createdTask))
    }

    else{
        throw new ApiError(500,"There is some problem regarding creating the tasks")
    }

})

// update task
const updateTask = asyncHandler(async (req, res)=>{

    const {title, description, dueDate} = req.body;
    const _id = req.params.id;

    if([_id, title,description,dueDate].some((eachField) => eachField === "")){
        throw new ApiError(400, "Fields are empty");
    }

    const updatedTask = await Tasks.findByIdAndUpdate(
        _id,
        {
            $set: {
                title,
                description,
                dueDate
            }
        },

        {
            new: true
        }
    )

    if(updatedTask){
        res.status(200).json(new ApiResponse(200,"Task updated successfully",updatedTask))
    }

    else{
        throw new ApiError(500,"There is some problem regarding updating the task")
    }

})
// delete task
const deleteTask = asyncHandler(async (req, res)=>{

    const _id = req.params.id;
    if(_id === ''){
        throw new ApiError(400,"Invalid id for the task to be deleted");
    }

    const deletedTask = await Tasks.findByIdAndDelete(_id);

    if(deletedTask){
        res.status(200).json(new ApiResponse(200,"Task deleted successfully",{}))
    }

    else{
        throw new ApiError(500,"There is some problem regarding updating the task")
    }

})
// get all tasks
const getAllTasks = asyncHandler(async (req, res)=>{

    const allTasks = await Tasks.find();

    if(allTasks){
        res.status(200).json(new ApiResponse(200,"Task deleted successfully",allTasks))
    }

    else{
        throw new ApiError(500,"There is some problem regarding updating the task")
    }

})
// get single task
const getSingleTask = asyncHandler(async (req, res)=>{

    const _id = req.params.id;
    if(_id === ''){
        throw new ApiError(400,"Invalid id for the task to be retrieved");
    }

    const singleTask = await Tasks.findById(_id);

    if(singleTask){
        res.status(200).json(new ApiResponse(200,"Single task retrieved successfully",singleTask))
    }

    else{
        throw new ApiError(500,"There is some problem regarding updating the task")
    }

})


export {
    createTask,
    updateTask,
    deleteTask,
    getAllTasks,
    getSingleTask
}