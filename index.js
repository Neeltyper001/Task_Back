import dotenv from 'dotenv';
import { dbConnection } from './src/db/dbConnection.js';
import { app } from './app.js';

// initialisation of the environment variables
dotenv.config({
    path:'./.env'
})

// connection to the database
dbConnection()
// Success message after database connection
.then(()=>{    
        app.listen(process.env.PORT_NUMBER || 8000,()=>{
            console.log("App is started succesfully after database connection");
        });
    }
)
// For any exception encountered during database connection
.catch((error)=>{
    console.log(error.message);
})