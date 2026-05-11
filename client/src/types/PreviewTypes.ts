import { type IResumeData } from "./FormTypes";

export interface IResumePreviewProps {
    resumeData: IResumeData;
    accentClass?:string;
    className?: string;
}

export interface ITemplateProps {
    resumeData:IResumeData;
    className?:string
    fontClass:string
}
