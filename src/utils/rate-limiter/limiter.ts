import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 2,
    message: {
        status: 429,
        message: "Please try again after 5 mins",
    },
    standardHeaders: true,
    legacyHeaders: false,
});

export default limiter;
