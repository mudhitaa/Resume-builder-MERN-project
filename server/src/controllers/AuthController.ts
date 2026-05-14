
import type { NextFunction, Request, Response } from "express";
import type { IAuthController } from "../types/authType";



export default class AuthController implements IAuthController {

    userLogin(req: Request, res: Response , next:NextFunction): void {
        res.json({
            success: true,
            message: "Login successful",
            accessToken: "sample_token"
        });

    }


    userRegister(req: Request, res: Response , next : NextFunction): void {
        res.json({
            success: true,
            message: "Registration successful"
        });

    }

}