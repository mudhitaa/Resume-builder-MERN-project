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



export interface IEducation {
    id: string;
    school: string;
    degree: string;
    startYear: string;
    endYear: string;
}

export interface IEducationSectionProps {
    education: IEducation[];

    handler: (
        index: number,
        ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => void;

    addEducation: () => void;

    removeEducation: (index: number) => void;
}



export interface IExperience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
}


export interface IWorkExperienceSectionProps {
    experience: IExperience[];

    handler: (
            index: number,
            ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    )=> void;

    addExperience: () => void;

    removeExperience: (index: number) => void;
}



export interface IResumeComponentProps {
    resumeData: IResumeData;
    handleInputChange: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface IResumeFormProps {
    resumeData: IResumeData;
    setResumeData: React.Dispatch<React.SetStateAction<IResumeData>>;
    className?: string;
}


export interface IProjects{
    title:string;
    techStack:string[];
    description:string;
    githubLink:string;
    liveLink:string;
}
export interface ICertifications{
    name:string;
    issuer:string;
    date:string;
    description:string;
    credentialId:string;
    credentialUrl:string;
}


export interface ICustomizationSectionProps {
    resumeData: IResumeData;

    handleSelectChange: (
        ev: ChangeEvent<HTMLSelectElement>
    ) => void;
}