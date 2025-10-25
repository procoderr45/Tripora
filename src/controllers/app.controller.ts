import { NextFunction, Request, Response } from "express";

const getHealth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({
            message: "Server is up and working",
        });
    } catch (err) {
        next(err);
    }
};

export default {
    getHealth
}