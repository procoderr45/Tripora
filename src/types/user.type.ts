import { Document } from "mongoose";

export type UserLocation = {
    city: string;
    state: string;
    country: string;
};

export type User = {
    _id: string;
    email: string;
    name: string;
    password: string;
    photoUrl: string;
    location: UserLocation;
    wishList: string[];
    visitedPlaces: string[];
    bio?: string;
    age?: number;
    hobbies?: string[];
};

export type LoginUserType = Pick<User, "email" | "password">;

export type RegisterUserType = Pick<User, "name"> & LoginUserType;

export type DbUser = User & Document;
