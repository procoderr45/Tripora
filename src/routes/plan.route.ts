import express from "express";
import planController from "../controllers/plan.controller.js";

const router = express();

router.post("/new", planController.createPlan);

export default router;
