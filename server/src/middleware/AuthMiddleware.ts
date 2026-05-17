
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtSecretConfig } from "../config/AppConfig";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return next({ code: 401, message: "No token provided" });
    }

    const decoded = jwt.verify(token, jwtSecretConfig as string);

    (req as any).user = decoded;

    next();
  } catch (err) {
    next({ code: 401, message: "Invalid token" });
  }
};