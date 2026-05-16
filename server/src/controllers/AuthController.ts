
import type { NextFunction, Request, Response } from "express";
import type { IAuthController } from "../types/authType";



export default class AuthController implements IAuthController {

    userLogin(req: Request, res: Response , next:NextFunction): void {
       
        next({code:400,
            details:{username:"username is invalid from controller"},
            message:"validation fail from userlogin"})

    }


    userRegister(req: Request, res: Response , next : NextFunction): void {
        const data = req.body

        res.status(201).json({
        status: true,
        data:data,
        message: "register success"
    });

    }

}