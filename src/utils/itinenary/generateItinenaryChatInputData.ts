import { Plan } from "../../types/plan.type";
import { User } from "../../types/user.type";
import getPlanDataAsString from "./getPlanDataAsString";
import getUserDataAsString from "./getUserDataAsString";

export default function (userData: User, planData: Plan) {
    const userDataString = getUserDataAsString(userData);
    const planDataString = getPlanDataAsString(planData);

    const overviewRoleOfModel = `You are acting as a plan guide , who studies user and their plan. 
    And make a personalized plan to travel for them. 
    Below is the TS types used in itinenary schema

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
    
    Give back the json of type ItinenaryPlanType , so that i can send the response
    
    `;

    const inputMessage = overviewRoleOfModel + "\n \n" + userDataString + "\n \n" + planDataString;

    return inputMessage;
}
