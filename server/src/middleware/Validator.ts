import {Request,Response, NextFunction } from "express"
import {ZodError, ZodObject} from "zod";

export const bodyValidator=(schema:ZodObject)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try{
            const data = req.body;
            console.log(req.body)
            req.body = await schema.parseAsync(data)
            next()

        }catch(exception){
            if(exception instanceof ZodError){
                let errBag:Record<string,string>={}
                exception.issues.map((error)=>{
                    const field = error.path.pop() as string
                    errBag[field]=error.message
                })
                next({code:400,message:"validation failed in validator.ts",details: errBag})
            }else{
                next(exception)
            }
        }
    }
}