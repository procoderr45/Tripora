import userRepository from "../repositories/user.repository.js";

const viewProfileService = async (userId: string) => {
    const userProfile = await userRepository.findUserById(userId);

    return userProfile;
};

export default {
    viewProfileService
}