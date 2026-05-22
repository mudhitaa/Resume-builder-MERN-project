import { createContext } from "react";
import type { Icredientials } from "../types/AuthTypes";

export interface IUser {
    _id: string;
    username: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface IAuthContext{
    loginuser: (data:Icredientials)=>Promise<IUser | void>;
    getLoggedInUser:()=>Promise<IUser | void>;
    loggedInUser : IUser | undefined;
    logoutUser: ()=>void;
}

const AuthContext = createContext<IAuthContext>({
    loginuser : async():Promise<IUser | void>=>{},          //override in case of no defination
    getLoggedInUser:async():Promise<IUser | void>=>{},
    loggedInUser: undefined,
    logoutUser:  async():Promise<IUser | void>=>{}
})

export default AuthContext


//create a global conteiner for auth data 
//login(data) use to send credentials to api ,save token and fetch user
//getloggedinuser for verify token and feetch current user
//loggedinuser stores user globallh