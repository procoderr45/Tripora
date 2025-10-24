import { CookieOptions } from "express";

export default function (duration: number): CookieOptions {
    return {
        maxAge: duration,
        secure: true,
        httpOnly: true,
        path: "/",
        sameSite: "none",
    };
}
