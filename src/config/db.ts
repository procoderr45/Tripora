import mongoose from "mongoose";
import getEnvVariable from "./env.js";

async function connectToDb() {
    const MONGO_URI = getEnvVariable("MONGO_URI");

    await mongoose.connect(MONGO_URI);
}

export default connectToDb;
