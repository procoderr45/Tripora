import { NextFunction, Request, Response } from "express";
import authService from "../services/auth.service.js";

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userData = await authService.registerUserService(req.body);

        res.json({
            status: "success",
            message: "Registered successfully",
            user: userData,
        });
    } catch (err) {
        next(err);
    }
};

export default {
    registerUser,
};
