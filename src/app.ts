import dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";
import authRouter from "./routes/auth.route.js";
import errorHandler from "./errors/errorHandler.js";
import profileRouter from "./routes/profile.route.js";
import isLoggedIn from "./middlewares/auth/isLoggedIn.js";
import cookieParser from "cookie-parser";
import planRouter from "./routes/plan.route.js";
import itinenaryRouter from "./routes/itinenary.route.js";
import cors from "cors";

const app: Express = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/profile", isLoggedIn, profileRouter);
app.use("/plan",  planRouter);
app.use("/itinenary", itinenaryRouter);

app.use(errorHandler);

export default app;
