// here the connection to the database logic 

import { databaseName } from "../constants/dbConstants.js";
import mongoose from "mongoose";
const dbConnection = async ()=>{

    try {
        const databaseConnection = await mongoose.connect(`${process.env.DB_CONNECTION_STRING}/${databaseName}`);
        console.log('Successfull connection with database established');
        return new Promise((response , _)=>{
            response(databaseConnection);
        })
    } catch (error) {
        console.log("There is an error in connecting to the database");
        return new Promise((_ , reject)=>{
            reject(error)
        })
    }
}

export {dbConnection}