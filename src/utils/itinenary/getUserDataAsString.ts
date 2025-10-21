import { User } from "../../types/user.type";

export default function (userData: User) {
    return `
        User Details - 
         1. name: ${userData.name}
         2. age: ${userData.age}
         3. location: ${userData.location}
         4. hobbies: ${userData.hobbies}
         5. visitedPlaces: ${userData.visitedPlaces}
         6. wishList: ${userData.wishList}
    `;
}
