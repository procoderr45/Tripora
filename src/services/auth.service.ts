import { AppError } from "../errors/AppError.js";
import userRepository from "../repositories/user.repository.js";
import { DbUser, RegisterUserType, User } from "../types/user.type.js";

const registerUserService = async (userData: RegisterUserType): Promise<DbUser> => {

    if(!userData) {
        throw new AppError("Please provide all required data", 400)
    }

    const { email, name, password } = userData;

    const existingUser = await userRepository.findUserByEmail(email);

    if (existingUser) {
        throw new AppError("User with this email already exists", 409);
    }

    const newUser: DbUser = await userRepository.createUser(name, email, password);

    return newUser;
};

export default {
    registerUserService,
};
