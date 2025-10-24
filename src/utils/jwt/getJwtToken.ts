import jwt from "jsonwebtoken";
import getEnvVariable from "../../config/env.js";

export default function (id: string) {
    const jwtSecreteEnvVal = getEnvVariable("JWT_SECRETE");
    const token = jwt.sign({ id }, jwtSecreteEnvVal);

    return token;
}
