import { Plan } from "../../types/plan.type";

export default function (planData: Plan) {
    return `
        Plan Description:
            1. description: ${planData.description}
            2. date: ${planData.date}
            3. fromLocation: ${planData.fromLocation}
            4. budget: ${planData.budget}
            5. numberOfDays: ${planData.numberOfDays}
            6. preferredPlaces: ${planData.preferredPlaces}
            7. with whome: ${planData.withWhom}
    `;
}
