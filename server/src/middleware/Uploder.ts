import multer from "multer";
import {v2 as cloudinary} from "cloudinary";
import { CloudinaryConfig } from "../config/AppConfig";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const uploader = ()=>{
    cloudinary.config({
        cloud_name:CloudinaryConfig.cloudName,
        api_key:CloudinaryConfig.apiKey,
        api_secret:CloudinaryConfig.apiSecret,
    })

    //storage
    const storage = new CloudinaryStorage({
        cloudinary:cloudinary,
        params:{
            folder:"server",
            allow_format :["jpg","jpeg","png","svg"],
            
        } as any
    })




    return multer({
            dest:"",
            fileFilter:()=>{},
            limits:{
                fileSize: 5*1024*1024
            }
        })

    }

export default uploader