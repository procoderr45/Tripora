import { NextFunction, Request, Response } from "express";
import authService from "../services/auth.service.js";
import getJwtToken from "../utils/jwt/getJwtToken.js";
import getCookieOptions from "../utils/jwt/getCookieOptions.js";
import { User } from "../types/user.type.js";
import throwAppError from "../errors/throwAppError.js";

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userData = await authService.registerUserService(req.body);

        const jwtToken = getJwtToken(String(userData._id));
        const cookieOptions = getCookieOptions(7 * 24 * 60 * 60 * 1000);

        res.cookie("token", jwtToken, cookieOptions);

        res.json({
            status: "success",
            message: "Registered successfully",
            user: userData,
        });
    } catch (err) {
        next(err);
    }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        if (!body) {
            throwAppError("Please provide all required data", 400);
        }
        const { email, password } = req.body;

        if (!email || !password) {
            throwAppError("Please provide all required data",400);
        }

        const userData: User = await authService.loginUserService(email, password);

        const jwtToken = getJwtToken(userData._id);
        const cookieOptions = getCookieOptions(24 * 7 * 60 * 60 * 1000);

        res.cookie("token", jwtToken, cookieOptions);

        res.json({
            status: "success",
            message: "Login successful",
            user: userData,
        });
    } catch (err) {
        next(err);
    }
};

export default {
    registerUser,
    loginUser,
};
