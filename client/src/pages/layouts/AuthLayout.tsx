import bgImage from "../../assets/images/landingbg.jpg";
import {type AuthLayoutProps } from "./authLayout.contract";
import { FirstHeader } from "../../components/headers/FirstHeader";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export const AuthLayout=({children, linkurl, linktext,className}:AuthLayoutProps)=>{
  
  const navigate = useNavigate()
  const {loggedInUser}= useAuth()
  useEffect(() => {
      if (loggedInUser) {
          navigate('/resume-builder');
      }
  }, [loggedInUser, navigate]);


    return(<>
        <FirstHeader linktext={linktext} linkurl={linkurl}/>
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
         >
        <div className={`bg-white/80 backdrop-blur-md p-7 rounded-xl shadow-lg shadow-blue-300 w-full max-w-5xl text-justify ${className}`}>
        {children}
      </div>
     </div>
    
    
    </>)  
}