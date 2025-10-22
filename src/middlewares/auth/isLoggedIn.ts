import { NextFunction, Request, Response } from "express";
import throwAppError from "../../errors/throwAppError.js";
import decodeJwtToken from "../../utils/jwt/decodeJwtToken.js";
import { JwtPayload } from "jsonwebtoken";
import userRepository from "../../repositories/user.repository.js";

export default async function (req: Request, res: Response, next: NextFunction) {
    const cookies = req.cookies;
    if (!cookies) {
        throwAppError("Cookies are missing, please login", 401);
    }

    const { token } = cookies;
    if (!token) {
        throwAppError("Token is missing, please login", 401);
    }

    const { id: userId } = decodeJwtToken(token) as JwtPayload;

    const loggedInUser = await userRepository.findUserById(userId);
    if (!loggedInUser) {
        return throwAppError("Invalid token, please login", 403);
    }

    req.user = loggedInUser;

    next();
}
