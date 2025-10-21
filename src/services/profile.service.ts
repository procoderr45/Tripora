import throwAppError from "../errors/throwAppError.js";
import userRepository from "../repositories/user.repository.js";
import { UpdateUserProfileType } from "../types/user.type.js";
import { editAllowedFields } from "../utils/constants.js";

const viewProfileService = async (userId: string) => {
    const userProfile = await userRepository.findUserById(userId);

    return userProfile;
};

const editProfileService = async (userId: string, updateData: UpdateUserProfileType) => {
    const updates: UpdateUserProfileType = {};

    for (const key of editAllowedFields) {
        const value = updateData[key];
        if (value !== undefined) {
            (updates as any)[key] = value;
        }
    }

    const updatedProfile = await userRepository.updateUserProfile(userId, updates);

    return updatedProfile;
};

export default {
    viewProfileService,
    editProfileService,
};
