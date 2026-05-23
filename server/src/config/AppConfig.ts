import { config } from "dotenv";
config();

export const CloudinaryConfig ={
    cloudName : process.env.CLOUDINARY_CLOUD_NAME,
    apiKey : process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,

}


//like a secret stamp that only my server knows for authentication of valid data and tampering
export const jwtSecretConfig = process.env.JWT_SECRET