import mongoose from "mongoose";


const DbConnection = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STR)
        console.log("Database connection established");
        
    } catch (error) {
        console.log('Error connecting to MongoDB' , error.message);
        
    }
}

export default DbConnection;