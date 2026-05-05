import bgImage from "../assets/images/landingbg.jpg";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const AuthLayout=({children}:Props)=>{
    return(<>
        <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
        {children}
      </div>
     </div>
    
    
    </>)  
}