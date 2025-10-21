import mongoose from "mongoose";

export type Plan = {
    userId: mongoose.Types.ObjectId;
    fromLocation: string;
    date: Date;
    preferredPlaces: string[];
    budget: number;
    numberOfDays: number;
    withWhom: string;
    description: string;
    itineraryKey: string;
};

export type CreatePlanType = Omit<Plan, "itineraryKey">;
