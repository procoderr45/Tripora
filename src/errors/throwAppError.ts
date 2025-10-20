import { AppError } from "./AppError.js";

export default function (message: string, statusCode: number) {
    throw new AppError(message, statusCode);
}
