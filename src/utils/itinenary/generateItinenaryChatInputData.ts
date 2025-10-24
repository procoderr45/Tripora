import { Plan } from "../../types/plan.type.js";
import { User } from "../../types/user.type.js";
import getPlanDataAsString from "./getPlanDataAsString.js";
import getUserDataAsString from "./getUserDataAsString.js";

export default function (userData: User, planData: Plan) {
    const userDataString = getUserDataAsString(userData);
    const planDataString = getPlanDataAsString(planData);
    const overviewRoleOfModel = `
        You are a professional travel plan guide who creates personalized day-wise travel itineraries.

        Return only a **valid JSON object** (no markdown, no comments, no extra text).  
        The JSON must strictly match this structure:

        {
          "description": string,
          "title": string,
          "daywisePlan": [
            {
              "title": string,
              "date": string,
              "localGuideContact"?: string[],
              "imageUrl": string,
              "location": string,
              "tip"?: string,
              "activities": [
                {
                  "title": string,
                  "description": string,
                  "images": string[]
                }
              ],
              "travelMode": "bus" | "car" | "bicycle" | "bike" | "aeroplan" | "walk" | "train" | "boat" | "rikshaw"
            }
          ],
          "estimatedBudget": number
        }

        STRICT RULES:
        1. Use only **real, valid, currently working URLs** from **Pexels.com** (domain must be pexels.com or images.pexels.com).
        2. Do **not fabricate, pattern-match, or guess** image links — search and use actual live Pexels images.
        3. If exact location images are unavailable, use **real similar or contextually relevant** ones (e.g., for Dwarka, use coastal temple or sea-related real Pexels images).
        4. Each "activities[].images" and "daywisePlan[].imageUrl" must include at least one verified working Pexels image.
        5. No Unsplash, Wikimedia, fake, placeholder, or broken URLs.
        6. Output only the JSON (no markdown, code blocks, backticks, newlines, or explanations).
        7. The JSON must start with { and end with } and be directly parsable by JSON.parse().
        `;

    const inputMessage = overviewRoleOfModel + "\n \n" + userDataString + "\n \n" + planDataString;

    return inputMessage;
}
