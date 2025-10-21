import { NextFunction, Request, Response } from "express";
import throwAppError from "../../errors/throwAppError.js";
import decodeJwtToken from "../../utils/jwt/decodeJwtToken.js";
import { JwtPayload } from "jsonwebtoken";

export default function (req: Request, res: Response, next: NextFunction) {
    const cookies = req.cookies;
    if (!cookies) {
        throwAppError("Cookies are missing, please login", 401);
    }

    const { token } = cookies;
    if (!token) {
        throwAppError("Token is missing, please login", 401);
    }

    const { id: userId } = decodeJwtToken(token) as JwtPayload;

    req.userId = String(userId);

    next();
}
