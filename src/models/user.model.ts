import mongoose from "mongoose";
import { type DbUser, type UserLocation, type User } from "../types/user.type.js";
import { defaultUserAvatar } from "../utils/constants.js";

const userSchema = new mongoose.Schema<DbUser>(
    {
        name: {
            type: String,
            required: true,
            minLength: 3,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            unique: [true, "User with this email already exists"],
            required: [true, "Email is required"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        photoUrl: {
            type: String,
            trim: true,
            default: defaultUserAvatar,
        },
        age: {
            type: Number,
        },
        bio: {
            type: String,
            trim: true,
        },
        location: {
            city: {
                type: String,
                default: "",
                trim: true,
            },
            state: {
                type: String,
                default: "",
                trim: true,
            },
            country: {
                type: String,
                default: "",
                trim: true,
            },
        },
        hobbies: {
            type: [String],
            default: [],
        },
        wishList: {
            type: [String],
            default: [],
        },
        visitedPlaces: {
            type: [String],
            default: [],
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model<DbUser>("User", userSchema);

export default UserModel;
