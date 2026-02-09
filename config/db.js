import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.Mongo_URI);
        console.log("Mongodb connected");
    }catch(error){
        console.log("mongo not connected",error.message);
        process.exit(1);
    }
};
export default connectDB;