import express from "express"
import { multerParseMiddleware } from "../middlewares/multer.middlewares.js";
import { createTask, deleteTask, getAllTasks, getSingleTask, updateTask } from "../controllers/tasks.controller.js";

const taskRouter = express.Router();



//creating tasks
taskRouter.route('/create').post(multerParseMiddleware,createTask);

// Updating tasks
taskRouter.route('/update/:id').put(multerParseMiddleware,updateTask);

// Deleting tasks
taskRouter.route('/delete/:id').delete(deleteTask);

// Getting All tasks
taskRouter.route('/get/all').get(getAllTasks);

// Getting single task
taskRouter.route('/get/:id').get(getSingleTask);

export {taskRouter}