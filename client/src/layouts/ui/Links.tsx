import type { ReactNode } from "react";
import { NavLink } from "react-router";

export interface IOutlinedLink{
    url:string;
    txt?:ReactNode;
    className?:string;
}


export const RedirectLink =({url,txt,className}:Readonly<IOutlinedLink>)=>{
    return(
        <NavLink to={url} className={`${className}`}>{txt}</NavLink>
    )
}