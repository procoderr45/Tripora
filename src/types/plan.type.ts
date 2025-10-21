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

type Activity = {
    title: string;
    description: string;
    images: string[];
};

type Day = {
    title: string;
    date: Date;
    localGuideContact?: string[];
    imageUrl: string;
    location: string;
    tip?: string;
    activities: Activity[];
};

export type ItineraryPlanType = {
    description: string;
    title: string;
    daywisePlan: Day[];
    estimatedBudget: number;
};

export type CreatePlanType = Omit<Plan, "itineraryKey">;
