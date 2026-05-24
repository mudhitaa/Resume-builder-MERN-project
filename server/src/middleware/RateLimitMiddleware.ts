import rateLimit from "express-rate-limit";

export const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 3,
  message: {
    status: false,
    message: "Too many accounts created, please try again later"
  }
});