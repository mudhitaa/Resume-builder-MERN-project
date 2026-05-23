import { type IResumeData } from "./FormTypes";

export interface IResumePreviewProps {
    resumeData: IResumeData;
    accentClass?:string;
    className?: string;
    isPDF?: boolean;
}

export interface ITemplateProps {
    resumeData:IResumeData;
    className?:string
    fontClass:string
    isPDF?: boolean;
}
