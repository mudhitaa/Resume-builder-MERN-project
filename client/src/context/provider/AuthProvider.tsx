import { useEffect, useState, type ReactNode } from "react"
import AuthContext, { type IUser } from "../AuthContext"
import type { Icredientials } from "../../types/AuthTypes"
import axiosInstance from "../../config/axiosConfig"
import Cookies from "js-cookie"
import { Spinner } from "../../ui/Loading"

const AuthProvider = ({children}:Readonly<{children:ReactNode}>)=>{

    const [loggedInUser,setLoggedInUser] = useState<IUser>()
    const [loading, setLoading] = useState<boolean>(true)

    //when form is submitted
    const loginuser = async(data:Icredientials):Promise<IUser>=>{

            const response =  await axiosInstance.post(
                '/auth/login',
                {...data, expiresInMins:180},
            )
            console.log("LOGIN RESPONSE:", response.data);

            Cookies.set(
                "loginCookie",
                response.data.data.token,
                {
                    expires:3/24
                }
            )

            return await getLoggedInUser()
    }

    //fetch currently logged in user
    const getLoggedInUser= async():Promise<IUser>=>{
        try{

            const userDetail = await axiosInstance.get(
                '/auth/me',
                {
                    headers:{
                        'Authorization':
                        "Bearer "+Cookies.get("loginCookie")
                    }
                }
            )

            setLoggedInUser(userDetail.data.data)

            return userDetail.data.data as IUser

        }finally{
            setLoading(false)
        }

    }

    //to check if token exists and auto login user it just runs once
    useEffect(()=>{
        const token = Cookies.get("loginCookie")
        if (token){
                getLoggedInUser()
        }else{
            setLoading(false)
        }

    },[])

    const logoutUser = async () => { 
            Cookies.remove("loginCookie");
            setLoggedInUser(undefined);
        
    };

    return loading? (<><Spinner/></>):(
        <AuthContext.Provider value ={{
            loginuser:loginuser,
            getLoggedInUser:getLoggedInUser,
            loggedInUser: loggedInUser,
            logoutUser: logoutUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider