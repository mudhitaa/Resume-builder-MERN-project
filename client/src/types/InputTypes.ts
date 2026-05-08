import type { ChangeEvent } from "react";

export interface IFormInput{
    type:string;
    name:string;
    placeholder:string;
    handler?: (ev:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>void;
    value?: string;
}
export interface IFormLable{
    htmlFor:string;
    children:React.ReactNode;
}

export interface ISingleOption{
    label:string,
    value?:string
}

export interface IFormSelectProps{
    name:string;
    handler?: (ev:ChangeEvent<HTMLSelectElement>)=>void;
    options:Array<ISingleOption>;
    errMsg?:string;
    value?: string;
}

export interface IFormTextArea{
    name:string;
    placeholder:string;
    handler: (ev:ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
}