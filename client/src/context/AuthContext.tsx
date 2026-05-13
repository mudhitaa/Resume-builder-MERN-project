import { createContext } from "react";
import type { Icredientials } from "../types/AuthTypes";


export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    };
    ip: string;
    address: {
        address: string;
        city: string;
        state: string;
        stateCode: string;
        postalCode: string;
        coordinates: {
            lat: number;
            lng: number;
        };
        country: string;
    };
    macAddress: string;
    university: string;
    bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
    };
    company: {
        department: string;
        name: string;
        title: string;
        address: {
            address: string;
            city: string;
            state: string;
            stateCode: string;
            postalCode: string;
            coordinates: {
                lat: number;
                lng: number;
            };
            country: string;
        };
    };
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: {
        coin: string;
        wallet: string;
        network: string;
    };
    role: string;
}

export interface IAuthContext{
    loginuser: (data:Icredientials)=>Promise<IUser | void>;
    getLoggedInUser:()=>Promise<IUser | void>;
    loggedInUser : undefined | IUser;
 }

const AuthContext = createContext<IAuthContext>({
    loginuser : async():Promise<IUser | void>=>{},          //override in case of no defination
    getLoggedInUser:async():Promise<IUser | void>=>{},
    loggedInUser: undefined,
})

export default AuthContext


//create a global conteiner for auth data 
//login(data) use to send credentials to api ,save token and fetch user
//getloggedinuser for verify token and feetch current user
//loggedinuser stores user globallh