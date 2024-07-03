import dotenv from 'dotenv';
import { dbConnection } from './src/db/dbConnection.js';
import { app } from './app.js';

dotenv.config({
    path:'./.env'
})

dbConnection()
.then((res)=>{    
        app.listen(process.env.PORT_NUMBER || 8000,()=>{
            console.log("App is started succesfully after database connection");
        });
    }
)
.catch((error)=>{
    console.log(error.message);
})