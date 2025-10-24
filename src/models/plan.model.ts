import mongoose from "mongoose";
import { Plan } from "../types/plan.type";

const planSchema = new mongoose.Schema<Plan>(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "User id is required to create a plan"],
            ref: "Plan",
        },
        description: {
            type: String,
            trim: true,
        },
        fromLocation: {
            type: String,
            trim: true,
        },
        date: {
            type: Date,
            required: [true, "please provide start date to create itinerary"],
        },
        numberOfDays: {
            type: Number,
            required: [true, "Please provide number of days to creaet itinerary"],
        },
        preferredPlaces: {
            type: [String],
            default: [],
        },
        budget: {
            type: Number,
            required: [true, "Please provide your budget to create itinerary"],
        },
        itinerary: {
            type: Object,
            default: {}
        },
        withWhom: {
            type: String,
            trim: true,
            default: "",
        },
        itineraryKey: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

const PlanModel = mongoose.model<Plan>("Plan", planSchema);

export default PlanModel;
