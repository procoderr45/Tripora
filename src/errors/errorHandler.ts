import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError.js";

export default function (err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: "fail",
            message: err.message,
        });
    }

    res.status(500).json({
        status: "fail",
        message: "Internal server error",
    });
}
