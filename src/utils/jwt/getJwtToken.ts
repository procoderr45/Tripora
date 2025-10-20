import jwt from "jsonwebtoken";
import getEnvVariable from "../../config/env.js";
import mongoose from "mongoose";

export default function (id: string) {
    const jwtSecreteEnvVal = getEnvVariable("JWT_SECRETE");
    const token = jwt.sign({ id }, jwtSecreteEnvVal);

    return token;
}
