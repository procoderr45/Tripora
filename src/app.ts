import dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";

const app: Express = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({
        Hell0: "omo",
    });
});

export default app;
