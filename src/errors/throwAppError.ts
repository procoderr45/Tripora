import { AppError } from "./AppError.js";

export default function (message: string) {
    throw new AppError(message, 400);
}
