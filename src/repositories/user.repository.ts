import PlanModel from "../models/plan.model.js";
import UserModel from "../models/user.model.js";
import { DbUser, UpdateUserProfileType, User } from "../types/user.type.js";

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

const findUserById = async (id: string): Promise<User | null> => {
    const user: User | null = await UserModel.findById(id).lean();

    return user;
};

const updateUserProfile = async (userId: string, updateData: UpdateUserProfileType) => {
    const updatedData = await UserModel.findByIdAndUpdate(userId, updateData, {
        returnDocument: "after",
        runValidators: true,
    });

    return updatedData;
};

const findUserPlans = async (userId: string) => {
    const userPlans = await PlanModel.find({
        userId,
    })
        .select("-itinerary")
        .lean();

    return userPlans;
};

export default {
    findUserByEmail,
    findUserById,
    createUser,
    findUserPlans,
    updateUserProfile,
};
