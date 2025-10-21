import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError.js";

export default function (err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: "fail",
            message: err.message,
        });
    }

    console.log(err);

    res.status(500).json({
        status: "fail",
        message: "Something went wrong",
        reason: err.message,
    });
}
