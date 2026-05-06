import { Heading1 } from "../typography/Heading";
import logo from "../../assets/images/logo.jpg";
import { RedirectLink } from "../../layouts/ui/Links";

export interface Firstheaderprops{
    linkurl:string;
    linktext:string;
}


export const FirstHeader = ({linkurl,linktext}:Readonly<Firstheaderprops>) => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

        {/* LEFT SIDE (LOGO + TITLE) */}
        <div >
          <RedirectLink url="/" 
          
              txt = {<div className="flex items-center gap-2">
                <img
                src={logo}
                alt="EasyResume Logo"
                className="h-14 w-14 rounded-full object-cover"
              />

              <Heading1
                pagetitle="EasyResume"
                className="text-blue-900"
              />
              </div>}
            />
          
        </div>

        {/* RIGHT SIDE */}
        <div className="ml-auto flex items-center gap-4">
          <RedirectLink url ={linkurl} txt ={linktext} className="block rounded-md bg-blue-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800"/>
        </div>

      </div>
    </header>
  );
};