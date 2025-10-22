import { NextFunction, Request, Response } from "express";
import throwAppError from "../errors/throwAppError.js";
import itinenaryService from "../services/itinenary.service.js";
import mongoose from "mongoose";

const generateItinenary = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const planId = new mongoose.Types.ObjectId(req.params.planId);
        if (!planId) {
            return throwAppError("Please provide plan id to generate itinenary", 400);
        }

        const itinenary = await itinenaryService.generateItinenaryService(req.user, planId);

        res.json({
            status: "success",
            message: "Itinenary created successfully",
            itinenary,
        });
    } catch (err) {
        next(err);
    }
};

export default {
    generateItinenary,
};
