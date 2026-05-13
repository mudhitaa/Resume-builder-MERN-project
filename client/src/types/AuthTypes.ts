import { z } from "zod";

export interface IRegisterFormData{
    username:string;
    email:string;
    password:string;
    confirmPassword:string;
}

export interface Icredientials{
    username:string;
    password:string;
}

export const loginDTO = z.object({
    username: z.string().nonempty("Username is required").nonoptional(),
    password: z.string().nonempty('Password is required').nonoptional()
})

export const LoginDefaultValues={
            username:"",
            password:""
}
export const RegisterDefaultValues={
            username:"",
            email:"",
            password:"",
            confirmPassword:""
}


export const registerDTO = z.object({
    username: z.string().nonempty().nonoptional("userName is required"),
    email: z.string().nonempty().nonoptional("Email is required"),
    password: z.string().nonempty().nonoptional("Password is required"),
    confirmPassword: z.string().nonempty().nonoptional("Confirm Password is required"),
})