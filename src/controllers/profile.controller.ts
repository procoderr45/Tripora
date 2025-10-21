import { NextFunction, Request, Response } from "express";
import profileService from "../services/profile.service.js";
import throwAppError from "../errors/throwAppError.js";

const viewProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.userId;

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

export default {
    viewProfile,
};
