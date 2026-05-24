
import { RedirectLink } from "../../ui/Links";
import { useAuth } from "../../hooks/useAuth";
import { LogoLeft } from "./LogoComponent";

export interface Firstheaderprops{
    linkurl?:string;
    linktext?:string;
    logourl?:string;
}


export const FirstHeader = ({linkurl,linktext}:Readonly<Firstheaderprops>) => {


  const{loggedInUser}=useAuth()

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

        <div >
        <LogoLeft/>
          
        </div>

        {!loggedInUser && (
          <div className="ml-auto flex items-center gap-4">
            <RedirectLink
              url={linkurl || "/"}
              txt={linktext}
              className="block rounded-md bg-blue-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800"
            />
          </div>
        )}

      </div>
    </header>
  );
};