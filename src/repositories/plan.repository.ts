import mongoose from "mongoose";
import PlanModel from "../models/plan.model.js";
import { CreatePlanType } from "../types/plan.type.js";

const createPlan = async (userId: mongoose.Types.ObjectId, planData: CreatePlanType) => {
    const plan = new PlanModel(planData);

    const savedPlan = await plan.save();

    return savedPlan;
};

export default {
    createPlan,
};
