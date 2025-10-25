import express from "express";
import appController from "../controllers/app.controller.js";

const router = express.Router();

router.get("/health", appController.getHealth);

export default router;
