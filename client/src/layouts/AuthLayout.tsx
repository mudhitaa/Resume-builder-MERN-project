import bgImage from "../assets/images/landingbg.jpg";
import { type ReactNode } from "react";
import { FirstHeader } from "../components/headers/FirstHeader";

type AuthLayoutProps = {
  linkurl:string;
  linktext:string;
  children?: ReactNode;
};
export const AuthLayout=({children, linkurl, linktext}:AuthLayoutProps)=>{
    return(<>
        <FirstHeader linktext={linktext} linkurl={linkurl}/>
        <div
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
        <div className="bg-white/80 backdrop-blur-md p-7 rounded-xl shadow-lg shadow-blue-300 w-full max-w-xl text-justify">
        {children}
      </div>
     </div>
    
    
    </>)  
}