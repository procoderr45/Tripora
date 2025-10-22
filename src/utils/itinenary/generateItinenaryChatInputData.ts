import { Plan } from "../../types/plan.type.js";
import { User } from "../../types/user.type.js";
import getPlanDataAsString from "./getPlanDataAsString.js";
import getUserDataAsString from "./getUserDataAsString.js";

export default function (userData: User, planData: Plan) {
    const userDataString = getUserDataAsString(userData);
    const planDataString = getPlanDataAsString(planData);

    const overviewRoleOfModel = `You are acting as a plan guide , who studies user and their plan. 
    And make a personalized plan to travel for them. 
    Below is the TS types used in itinenary schema

    Generate data of type ItineraryPlanType. Return only a valid JSON object (no code blocks or markdown).

Return only valid JSON strcture , since i am going to directly parse your text using JSON.pare(yourResponse)  matching this ItineraryPlanType structure (dont use characters that make json invalid like \` or new line char):
give valid images links of the similar nature as that days location, should valid and publically accessible images 
, dont include images from upload.wikimedia.org domain, and images should be valid and accessible, its giving 404, page not found error and images should be provided by trusted domains and valid iamges

For each activity or location, include a valid, working image URL from Unsplash, Pexels, or Wikimedia. Do not generate fictitious URLs

please return a valid json data starting and ending with { and }, but shouldnot contain new line chars


please dont make dummy images data by matching the pattern of unsplash, pexels , give real and currently available image links , live images by searching on the web, but the images should be relatable to each days activities but only give images from pexels
but the images should be relatable to the location and daywise.activity , ex - if location is shimla, please try to find valid, correct , live link of shimla, if u dont find atleast give images related to place , in this case (shimla location) please give snow and other images links that are famous in shimla

{
  description: string,
  title: string,
  daywisePlan: {
    title: string,
    date: string,
    localGuideContact?: string[],
    imageUrl: string,
    location: string,
    tip?: string,
    activities: {
      title: string,
      description: string,
      images: string[]
    }[],
    travelMode: "bus" | "car" | "bicycle" | "bike" | "aeroplan" | "walk" | "train" | "boat" | "rikshaw"
  }[],
  estimatedBudget: number
}

    Generate realistic data with proper types, no extra text or comments , not any other text, since i am going to directly parse the text (that u are going to send me) to json, no other chars like \` or '\' or , or or new line char.

    
    export type CreatePlanType = Omit<Plan, "itineraryKey">;
    
    Give back the json of type ItinenaryPlanType. It must a valid json  , so that i can send the response
    
    `;

    const inputMessage = overviewRoleOfModel + "\n \n" + userDataString + "\n \n" + planDataString;

    return inputMessage;
}
