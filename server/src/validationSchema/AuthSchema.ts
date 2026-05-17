import { z } from "zod";

export const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,25}$/


export const UserRegisterSchema = z.object({
    username: z.string().min(2,"Name must be of atleassst 2 char long").max(50,"too long"),
    email: z.email("Invalid email address").nonempty("Email is required"),
    password: z.string().regex(PasswordRegex, "Password must be strong").trim().nonempty("Password is required"),
    confirmPassword: z.string().trim().nonempty("rePassword is required"),


}).refine((data) => data.password === data.confirmPassword, 
    {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const UserLoginSchema = z.object({
    username: z.string().min(2,"Name must be of atleast 2 char long").max(50,"too long"),
    password: z.string().nonempty("Password is required"),

})



