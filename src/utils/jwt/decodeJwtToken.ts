import jwt, { JwtPayload } from "jsonwebtoken";
import getEnvVariable from "../../config/env.js";

export default function (token: string) {
    const jwtSecrete = getEnvVariable("JWT_SECRETE");
    const decodedMessage = jwt.verify(token, jwtSecrete);

    return decodedMessage;
}
