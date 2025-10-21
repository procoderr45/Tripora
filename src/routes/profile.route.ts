import express, { Router } from "express";
import profileController from "../controllers/profile.controller.js";

const router: Router = express.Router();

router.get("/view", profileController.viewProfile);

export default router;
