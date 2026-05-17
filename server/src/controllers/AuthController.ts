
import type { NextFunction, Request, Response } from "express";
import type { IAuthController } from "../types/authType";
import bcrypt from "bcryptjs";
import UserModel from "../models/User";
import { IUser } from "../types/UserTypes";
import jwt from "jsonwebtoken"
import { jwtSecretConfig } from "../config/AppConfig";


export default class AuthController implements IAuthController {

    async userLogin(req: Request, res: Response , next:NextFunction){
        try {
            const {username,password} = req.body
            const userDetail = await UserModel.findOne({
                username : username
            })
            if(!userDetail){
                throw({code:422,message:"user not registered from userlogin"})
            }else{
                //pasd veerify
                if(!bcrypt.compareSync(password,userDetail.password)){
                    throw({code:422,message:"password does not match from userrlogin"})
                }else{
                    //VERIFIED
                    const token = jwt.sign({sub:userDetail._id},jwtSecretConfig as string,{
                        expiresIn:"1d"
                    })

                    res.json({
                        data:token,
                        message:"User loggin success",
                        status:true
                    })

                }
            }
        }catch(exception){
            console.log(exception)
        }

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


    async getLoggedInUserProfile(req: Request, res: Response , next : NextFunction){
        
    }

}