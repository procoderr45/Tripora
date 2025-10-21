import { UpdateUserProfileType } from "../types/user.type";

export const defaultUserAvatar =
    "https://static.vecteezy.com/system/resources/previews/060/605/418/non_2x/default-avatar-profile-icon-social-media-user-free-vector.jpg";

export const editAllowedFields: (keyof UpdateUserProfileType)[] = [
    "name",
    "age",
    "bio",
    "photoUrl",
    "wishList",
    "visitedPlaces",
    "hobbies",
    "location",
];
