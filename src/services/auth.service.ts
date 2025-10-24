import { AppError } from "../errors/AppError.js";
import userRepository from "../repositories/user.repository.js";
import { DbUser, RegisterUserType, User } from "../types/user.type.js";
import passwordUtils from "../utils/bcrypt/passwordUtils.js";

const registerUserService = async (userData: RegisterUserType): Promise<DbUser> => {
    if (!userData) {
        throw new AppError("Please provide all required data", 400);
    }

    const { email, name, password } = userData;

    const existingUser = await userRepository.findUserByEmail(email);

    if (existingUser) {
        throw new AppError("User with this email already exists", 409);
    }

    const hashedPassword = await passwordUtils.hashPassword(password);

    const newUser: DbUser = await userRepository.createUser(name, email, hashedPassword);

    return newUser;
};

const loginUserService = async (email: string, password: string): Promise<User> => {
    const user: User | null = await userRepository.findUserByEmail(email);

    if (!user) {
        throw new AppError("Invalid credentials", 403);
    }

    const isPasswordMatched = await passwordUtils.comparePassword(password, user.password);
    if (!isPasswordMatched) {
        throw new AppError("Invalid credentials", 403);
    }

    return user;
};

const logoutUserService = () => {
    return {
        maxAge: 0,
        expires: new Date(Date.now()),
    };
};

export default {
    registerUserService,
    loginUserService,
    logoutUserService,
};
