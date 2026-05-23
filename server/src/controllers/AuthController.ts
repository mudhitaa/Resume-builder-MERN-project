
import type { NextFunction, Request, Response } from "express";
import type { IAuthController } from "../types/authType";
import bcrypt from "bcryptjs";
import UserModel from "../models/User"
import ResumeModel from "../models/Resume";
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
                    status:true,
                    message:"User login success",
                    data:{
                        token,
                        user:{
                            _id:userDetail._id,
                            username:userDetail.username,
                            email:userDetail.email
                        }
                    }
                    })

                }
            }
        }catch(exception){
            next(exception)
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

        try {
          const userId = (req as any).user.sub;
          const user = await UserModel.findById(userId).select("-password");
          res.json({
            status: true,
            data: user,
            message:"user fetched"
          });
    
        } catch (err) {
          next(err);
        }
    }

    async updateProfile(req: Request,res: Response, next: NextFunction) {
            try {
                const userId = (req as any).user.sub;
                const { username, email } = req.body;
                const updated = await UserModel.findByIdAndUpdate(
                    userId,{ username,email,},
                    { new: true }
                ).select("-password");
                res.json({
                    status: true,
                    data: updated,
                    message: "Profile updated successfully",
                });

            } catch (err) {
                next(err);
            }
        }

    async changePassword(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = (req as any).user.sub;
            const { oldPassword, newPassword } = req.body
            const user = await UserModel.findById(userId);

            if (!user) throw { code: 404, message: "User not found" };

            //verify
            const isMatch = bcrypt.compareSync(oldPassword, user.password);
            if (!isMatch) {
                throw { code: 422, message: "Old password is incorrect" };
            }

            if (oldPassword === newPassword) {
                throw {
                    code: 422,
                    message: "New password must be different",
                };
            }
            //rehash
            const hashedPassword = bcrypt.hashSync(newPassword, 12);
            user.password = hashedPassword;
            await user.save();

            res.json({
                status: true,
                message: "Password updated successfully",
            });

        } catch (err) {
            next(err);
        }
    }

    async deleteProfile(req: Request, res: Response, next: NextFunction){
        try{
            const userId = (req as any).user.sub
            await ResumeModel.deleteMany({ userId });
            const deletedUser = await UserModel.findByIdAndDelete(userId)
            if (!deletedUser){
                throw{
                    code:404,
                    messsage: "user not found",
                }
            }
            res.json({
                status:true,
                message:"Account deleted successfully"
            })
        }catch(err){
            next(err)
        }
    }

}