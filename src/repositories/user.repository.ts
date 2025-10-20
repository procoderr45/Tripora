import UserModel from "../models/user.model.js";
import { DbUser, User } from "../types/user.type.js";

const findUserByEmail = async (email: string): Promise<User | null> => {
    const user: User | null = await UserModel.findOne({ email }).lean();

    return user;
};

const createUser = async (name: string, email: string, password: string): Promise<DbUser> => {
    const newUser = new UserModel({
        name,
        email,
        password,
    });

    const savedUser: DbUser = await newUser.save();

    return savedUser;
};

export default {
    findUserByEmail,
    createUser,
};
