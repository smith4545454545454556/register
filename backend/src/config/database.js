import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/hackation_practice")
        console.log("connected to DB")
    }
    catch (error) {
        console.log(error)
    }
}