import type { Request,Response,NextFunction } from "express"

const ExceptionHandlingMiddleware =(error:any,req:Request,res:Response,next: NextFunction)=>{
    
    //error handling middleware
    
    let code = error.code || 500
    let detail = error.details || error.detail|| null
    let message = error.message||"something went wrong from exception"

    
    res.status(code).json({
        error:detail,
        status:false,
        message: message
    })
}

export default ExceptionHandlingMiddleware