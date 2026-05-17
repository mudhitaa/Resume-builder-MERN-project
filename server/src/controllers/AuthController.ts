
import type { NextFunction, Request, Response } from "express";
import type { IAuthController } from "../types/authType";
import bcrypt from "bcryptjs";
import UserModel from "../models/User";
import { IUser } from "../types/UserTypes";


export default class AuthController implements IAuthController {

    userLogin(req: Request, res: Response , next:NextFunction): void {
          const data = req.body

        res.status(201).json({
        status: true,
        data:data,
        message: "login success"
    });
        next({code:400,
            details:{username:"username is invalid from controller"},
            message:"validation fail from userlogin"})

    }


    async userRegister(req: Request, res: Response , next : NextFunction) {
        try{
            const data = req.body
            //pswd encryption
            data.password = bcrypt.hashSync(data.password,12)

            //db store
            const userObj = new UserModel(data)
            await userObj.save()

            res.status(201).json({
                status: true,
                data:{
                    _id:userObj._id,
                    username:userObj.username,
                    email:userObj.email,
                    createdAt: userObj.createdAt,
                    updatedAt: userObj.updatedAt
                } as unknown as IUser,
                message: "register success"
                });
        }catch(exception){
            next(exception)
        }

    }

}