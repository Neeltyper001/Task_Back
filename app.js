import express from 'express';
import cors from "cors";
import { taskRouter } from './src/routes/tasks.routes.js';

const app = express();

app.use(cors({
    origin: process.env.ALLOWED_ORIGIN,
    methods: ["GET","POST","PUT","PATCH","DELETE"]
}))

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Middleware for routing to the various operations associated with tasks
app.use("/api/v1/tasks",taskRouter);

export {app};