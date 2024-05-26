import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";   // db is  in another continnat

const connectdb = async ()=>{
    try {
       const connectionInstance= await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MonogoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("Mongodb connectioon error ",error)
        process.exit(1)
        
    }
}

export default connectdb