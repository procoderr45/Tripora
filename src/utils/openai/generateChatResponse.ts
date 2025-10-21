import { Plan } from "../../types/plan.type";
import { User } from "../../types/user.type";
import generateItinenaryChatInputData from "../itinenary/generateItinenaryChatInputData";
import client from "./client";

export const generateChatResponse = async function (userData: User, planData: Plan) {
    const message = generateItinenaryChatInputData(userData, planData);

    const response = await client.chat.completions.create({
        model: "chatgpt-4o-latest",
        messages: [{ role: "user", content: message }],
    });

    return response.choices[0]?.message.content || "Failed to generate response";
};
