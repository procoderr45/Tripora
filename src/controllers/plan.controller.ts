import { NextFunction, Request, Response } from "express";
import throwAppError from "../errors/throwAppError.js";
import planService from "../services/plan.service.js";
import mongoose from "mongoose";

const createPlan = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.user._id;
        if (!id) {
            return throwAppError("Invalid user id, please login", 403);
        }

        const userId = new mongoose.Types.ObjectId(id);

        if (!userId) {
            return throwAppError("Please login", 403);
        }

        const newPlan = await planService.createPlanService(userId, req.body);

        res.json({
            status: "success",
            message: "Plan has been created successfully",
            plan: newPlan,
        });
    } catch (err) {
        next(err);
    }
};

const getPlan = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const planId = new mongoose.Types.ObjectId(id);

        const plan = await planService.getPlanService(planId);

        res.json({
            message: "Plan found",
            status: "success",
            plan,
        });
    } catch (err) {
        next(err);
    }
};

export default {
    createPlan,
    getPlan,
};
