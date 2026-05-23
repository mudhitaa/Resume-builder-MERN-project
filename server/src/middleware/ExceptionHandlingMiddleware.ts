import type { Request, Response, NextFunction } from "express";

const ExceptionHandlingMiddleware = (error: any,req: Request,res: Response,next: NextFunction) => {

    console.log("ERROR:", error);

    
    let statusCode = 500;
    let message = error.message || "Something went wrong";
    let detail = error.details || error.detail || null;

    // MongoDB duplicate key error
    if (error.code === 11000) {
        return res.status(409).json({
            status: false,
            message: "Username or email already exists",
        });
    }

    if (error.code && error.code >= 100 && error.code < 600) {
        statusCode = error.code;
    }

    return res.status(statusCode).json({
        status: false,
        message,
        error: detail,
    });
};

export default ExceptionHandlingMiddleware;