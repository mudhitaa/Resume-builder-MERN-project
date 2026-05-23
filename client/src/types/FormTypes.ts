import {type ChangeEvent } from "react";


export interface IResumeData {
    fullname: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    github: string;

    summary: string;

    skills: string[];
    education: IEducation[];
    experience: IExperience[];
    projects: IProjects[];
    certifications: ICertifications[];

    template: string;
    font: string;
    accentColor: string;
}

export interface IExperience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface IEducation {
    id: string;
    school: string;
    degree: string;
    startYear: string;
    endYear: string;
}


export interface IResumeComponentProps {
    resumeData: IResumeData;
    handleInputChange: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface IResumeFormProps {
    resumeData: IResumeData;
    setResumeData: React.Dispatch<React.SetStateAction<IResumeData>>;
    className?: string;
    onSave?:()=>void
}

export interface ICertifications{
    id:string;
    name:string;
    issuer:string;
    date:string;
    description:string;
    credentialId:string;
}

export interface IProjects{
    id:string;
    title:string;
    description:string;
    githubLink:string;
}

