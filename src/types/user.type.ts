import { Document } from "mongoose";

export type UserLocation = {
    city: string;
    state: string;
    country: string;
};

export type User = {
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

export type DbUser = User & Document;
