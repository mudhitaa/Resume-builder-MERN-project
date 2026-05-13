import Cookies from "js-cookie"
import { type Icredientials } from "../types/AuthTypes"
import axiosInstance from "../config/axiosConfig"

export const userLogin = async(data:Icredientials)=>{
                const response =  await axiosInstance.post('/auth/login', 
                {...data, expiresInMins:180},
            )
            Cookies.set("loginCookie",response.data.accessToken,{
                expires:3/24
            })



            
            const userDetail = await axiosInstance.get('/auth/me',{
                headers:{
                    'Authorization': "Bearer "+Cookies.get("loginCookie")
                }
            })
            return userDetail     
}