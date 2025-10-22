import { GoogleGenAI } from "@google/genai";
import getEnvVariable from "../../config/env.js";
import dotenv from "dotenv"

dotenv.config()

const client = new GoogleGenAI({
    apiKey: getEnvVariable("GEMINI_AI_API_KEY")
});

export default client;
