import { RedirectLink } from "../../ui/Links"
import logo from "../../assets/images/logo.jpg";

export const LogoLeft =()=>{
    return ( 
    <RedirectLink
        url="/"
        txt={
            <div className="group flex items-center gap-3">
            <div className="relative">

                <div className="absolute inset-0 rounded-2xl bg-blue-200/40 blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative h-14 w-14 rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-0.5">
                <img
                    src={logo}
                    alt="EasyResume Logo"
                    className="h-full w-full object-cover"
                />

                </div>
            </div>
            <div className="flex items-center">
                <span className="text-2xl font-black tracking-tight text-blue-800 transition-colors duration-300 group-hover:text-blue-700">
                EasyResume
                </span>

            </div>

            </div>
        }
    />
    )
}