import mongoose from "mongoose";
import planRepository from "../repositories/plan.repository.js";
import throwAppError from "../errors/throwAppError.js";
import { generateChatResponse } from "../utils/gemini/generateChatResponse.js";
import { User } from "../types/user.type";
import generateItinenaryChatInputData from "../utils/itinenary/generateItinenaryChatInputData.js";

const generateItinenaryService = async (user: User, planId: mongoose.Types.ObjectId) => {
    const planData = await planRepository.findPlanById(planId);

    if (!planData) {
        return throwAppError("No plan found to create itinenary", 404);
    }

    const inputMessage = generateItinenaryChatInputData(user, planData);

    const itinenary = (await generateChatResponse(inputMessage))!;

    const itinenaryJsonData = JSON.parse(itinenary);

    return itinenaryJsonData;
};

export default {
    generateItinenaryService,
};
