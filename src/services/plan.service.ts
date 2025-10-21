import mongoose from "mongoose";
import planRepository from "../repositories/plan.repository.js";
import { CreatePlanType } from "../types/plan.type.js";
import throwAppError from "../errors/throwAppError.js";

const createPlanService = async (userId: mongoose.Types.ObjectId, planData: CreatePlanType) => {
    if (!planData) {
        return throwAppError("Please provide required data to create a plan", 400);
    }

    planData.userId = userId;

    const newPlan = await planRepository.createPlan(userId, planData);

    return newPlan;
};

const getPlanService = async (planId: mongoose.Types.ObjectId) => {
    const plan = await planRepository.findPlanById(planId);

    return plan;
};

export default {
    createPlanService,
    getPlanService
};
