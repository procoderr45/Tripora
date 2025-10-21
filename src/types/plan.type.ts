import mongoose from "mongoose";

export type Plan = {
    userId: mongoose.Schema.Types.ObjectId;
    fromLocation: string;
    date: Date;
    preferredPlaces: string[];
    budget: number;
    numberOfDays: number;
    withWhom: string;
    description: string;
    itineraryKey: string;
};
