import express, { Router } from "express"
import authController from "../controllers/auth.controller.js"

const router: Router = express.Router()

router.post("/register", authController.registerUser)

export default router