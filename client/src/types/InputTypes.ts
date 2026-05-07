import type { BaseSyntheticEvent } from "react";

export interface IFormInput{
    type:string;
    name:string;
    placeholder:string;
    handler?: (ev:BaseSyntheticEvent)=>void;
}
export interface IFormLable{
    htmlFor:string;
    children:React.ReactNode;
}

export interface ISingleOption{
    label:string,
    value:string
}

export interface IFormSelectProps{
    name:string;
    handler?: (ev:BaseSyntheticEvent)=>void;
    options:Array<ISingleOption>;
    errMsg?:string;
}

export interface IFormTextArea{
    name:string;
    placeholder:string;
    handler: (ev:BaseSyntheticEvent) => void;
}