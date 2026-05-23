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
    username: z.string().nonempty("userName is required").nonoptional(),
    email: z.string().nonempty("Email is required").nonoptional(),
    password: z.string().nonempty("Password is required").nonoptional(),
    confirmPassword: z.string().nonempty("Confirm Password is required").nonoptional(),
})



export const profileDTO = z.object({
  username: z.string().min(3, "Username must be at least 2 characters"),
  email: z.email("Invalid email"),
});

export type IProfileFormData = z.infer<typeof profileDTO>;

export const passwordUpdateDTO = z.object({
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
});

export type IPasswordUpdateForm = z.infer<typeof passwordUpdateDTO>;