// here the connection to the database logic 

import { databaseName } from "../constants/dbConstants.js";
import mongoose from "mongoose";

// method for db connection
const dbConnection = async ()=>{

    try {
        // connection statement
        const databaseConnection = await mongoose.connect(`${process.env.DB_CONNECTION_STRING}/${databaseName}`);
        console.log('Successfull connection with database established');

        // If connection is established returning a promise providing response
        return new Promise((response , _)=>{
            response(databaseConnection);
        })
    } catch (error) {

        // In case of failure in connecting to the database returning a rejected promise
        console.log("There is an error in connecting to the database");
        return new Promise((_ , reject)=>{
            reject(error)
        })
    }
}

export {dbConnection}