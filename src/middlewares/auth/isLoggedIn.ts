import { NextFunction, Request, Response } from "express";
import throwAppError from "../../errors/throwAppError.js";
import decodeJwtToken from "../../utils/jwt/decodeJwtToken.js";

export default function (req: Request, res: Response, next: NextFunction) {
    const cookies = req.cookies;
    if (!cookies) {
        throwAppError("Cookies are missing, please login", 401);
    }

    const { token } = cookies;
    if (!token) {
        throwAppError("Token is missing, please login", 401);
    }

    const userId = decodeJwtToken(token);

    req.userId = String(userId);
    console.log(req.userId);

    next();
}
