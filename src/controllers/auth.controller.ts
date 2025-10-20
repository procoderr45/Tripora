import { NextFunction, Request, Response } from "express";
import authService from "../services/auth.service.js";
import getJwtToken from "../utils/jwt/getJwtToken.js";
import getCookieOptions from "../utils/jwt/getCookieOptions.js";

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

export default {
    registerUser,
};
