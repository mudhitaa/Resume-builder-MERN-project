import {type ChangeEvent } from "react";

export interface IResumeData {
    fullname: string;
    email: string;
    phone: string;
    address: string;
    skills: string;
    template: string;
    font: string;

    education: IEducation[];
    experience: IExperience[];
    summary: string;
}

export interface IEducation {
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