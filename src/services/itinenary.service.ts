import mongoose from "mongoose";
import planRepository from "../repositories/plan.repository.js";
import throwAppError from "../errors/throwAppError.js";
import { generateChatResponse } from "../utils/openai/generateChatResponse.js";
import { User } from "../types/user.type";

const generateItinenaryService = async (user: User, planId: mongoose.Types.ObjectId) => {
    const planData = await planRepository.findPlanById(planId);

    if (!planData) {
        return throwAppError("No plan found to create itinenary", 404);
    }

    const itinenary = await generateChatResponse(user, planData);
    return itinenary;
};

export default {
    generateItinenaryService,
};
