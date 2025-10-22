import express from "express";
import itinenaryController from "../controllers/itinenary.controller.js";

const router = express.Router();

router.post("/generate/:planId", itinenaryController.generateItinenary);

export default router;
