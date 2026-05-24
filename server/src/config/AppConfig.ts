import { config } from "dotenv";
config();



//like a secret stamp that only my server knows for authentication of valid data and tampering
export const jwtSecretConfig = process.env.JWT_SECRET