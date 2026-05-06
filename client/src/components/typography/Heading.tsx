import type { ReactNode } from "react";

export interface Heading1Props{
    pagetitle:string;
    className?:string;
}

export interface Heading2Props{
    maintext:string;
    subtext?:string;
}
export interface Textprops{
    children:ReactNode;
    className?:string;
}


export const Heading1=({pagetitle,className=''}:Readonly<Heading1Props>)=>{
    return(
        <h1 className={`text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 ${className}`}>{pagetitle}</h1>
    )
}


export const Heading2=({maintext,subtext=''}:Readonly<Heading2Props>)=>{
    return( 
        <div className={`text-md sm:text-lg md:text-xl italic ${subtext}`}>{maintext}</div>
    )
}

export const Text = ({children,className=''}:Readonly<Textprops>)=>{
    return(
        <div className={`text-sm sm:text-base md:text-lg ${className}`}>{children}</div>
    )
}