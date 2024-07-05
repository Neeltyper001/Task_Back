import express from 'express';
import cors from "cors";
import { taskRouter } from './src/routes/tasks.routes.js';

// express app initialisation
const app = express();

// CORS [CROSS ORIGIN RESOURCE SHARING ]
app.use(cors(
    {
    Origin: process.env.ALLOWED_ORIGIN,
    methods: ["GET","POST","PUT","PATCH","DELETE"]
}
))

// middlewares for parsing json contents and url
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Middleware for routing to the various operations associated with tasks
app.use("/api/v1/tasks",taskRouter);

export {app};