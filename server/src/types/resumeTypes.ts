import { type Request, type Response, type NextFunction } from "express";


export interface IResumeController{
    getMyResume(req:Request,res:Response,next:NextFunction):void
    saveResume(req:Request,res:Response,next:NextFunction):void
    
}