import bgImage from "../../assets/images/landingbg.jpg";
import {type AuthLayoutProps } from "./authLayout.contract";
import { FirstHeader } from "../../components/headers/FirstHeader";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "sonner";


export const AuthLayout=({children, linkurl, linktext}:AuthLayoutProps)=>{
  
  const navigate = useNavigate()
  const {loggedInUser}= useAuth()
  useEffect(() => {
      if (loggedInUser) {
          toast.info("You are logged in");
          navigate('/resume-builder');
      }
  }, [loggedInUser, navigate]);


    return(<>
        <FirstHeader linktext={linktext} linkurl={linkurl}/>
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
         >
        <div className="bg-white/80 backdrop-blur-md p-7 rounded-xl shadow-lg shadow-blue-300 w-full max-w-xl text-justify">
        {children}
      </div>
     </div>
    
    
    </>)  
}