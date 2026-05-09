import { z } from "zod";




export interface IRegisterFormData{
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
}

export interface Icredientials{
    email:string;
    password:string;
}

export const loginDTO = z.object({
    email: z.string().nonempty("Email is required").nonoptional(),
    password: z.string().nonempty('Password is required').nonoptional()
})

export const LoginDefaultValues={
            //email:"",
            email:"",
            password:""
}
export const RegisterDefaultValues={
            name:"",
            email:"",
            password:"",
            confirmPassword:""
}


export const registerDTO = z.object({
    name: z.string().nonempty().nonoptional("Name is required"),
    email: z.string().nonempty().nonoptional("Email is required"),
    password: z.string().nonempty().nonoptional("Password is required"),
    confirmPassword: z.string().nonempty().nonoptional("Confirm Password is required"),
})