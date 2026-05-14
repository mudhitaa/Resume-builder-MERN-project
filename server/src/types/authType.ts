import { type Request, type Response, type NextFunction } from "express";


export interface IAuthController{
    userLogin(req:Request,res:Response,next:NextFunction):void
    userRegister(req:Request,res:Response,next:NextFunction):void
}