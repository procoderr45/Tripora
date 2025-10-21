import OpenAI from "openai";
import getEnvVariable from "../../config/env";

const client = new OpenAI({
    apiKey: getEnvVariable("OPENAI_API_KEY"),
});

export default client;
