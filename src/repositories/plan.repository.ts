import mongoose from "mongoose";
import PlanModel from "../models/plan.model.js";
import { CreatePlanType, ItineraryPlanType } from "../types/plan.type.js";

const createPlan = async (userId: mongoose.Types.ObjectId, planData: CreatePlanType) => {
    const plan = new PlanModel(planData);

    const savedPlan = await plan.save();

    return savedPlan;
};

const findPlanById = async (planId: mongoose.Types.ObjectId) => {
    const plan = await PlanModel.findById(planId).lean();

    return plan;
};

const savePlanItineraryKey = async (planId: string, itineraryPlanKey: string) => {
    const savedPlanData = await PlanModel.findByIdAndUpdate(
        planId,
        { itineraryKey: itineraryPlanKey },
        {
            returnDocument: "after",
            runValidators: true,
        }
    );

    return savedPlanData;
};

export default {
    createPlan,
    findPlanById,
    savePlanItineraryKey,
};
