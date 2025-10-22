import { NextFunction, Request, Response } from "express";
import profileService from "../services/profile.service.js";
import throwAppError from "../errors/throwAppError.js";

const viewProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.user._id;

        if (!userId) {
            return throwAppError("Please login", 403);
        }

        const userProfile = await profileService.viewProfileService(userId);

        res.json({
            status: "success",
            message: "User found",
            user: userProfile,
        });
    } catch (err) {
        next(err);
    }
};

const editProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.user._id;
        if (!req.body) {
            return throwAppError("Please provide data to update", 400);
        }

        if (!userId) {
            return throwAppError("Invalid userId , please login", 403);
        }

        const updatedProfile = await profileService.editProfileService(userId, req.body);

        res.json({
            status: "success",
            message: "Updated profile data successfully",
            user: updatedProfile,
        });
    } catch (err) {
        next(err);
    }
};

export default {
    viewProfile,
    editProfile,
};
