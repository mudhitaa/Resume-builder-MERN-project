
import {type ChangeEvent } from "react";
import { FormActionButton } from "../../from/Button";
import EducationSection from "../../from/resumeform/EducationSection";
import { type IResumeFormProps } from "../../types/FormTypes";
import WorkExperienceSection from "../../from/resumeform/WorkExperienceSection";
import { PersonalInfoSection } from "../../from/resumeform/PersonalInfo";
import { SummarySection } from "../../from/resumeform/Summary";
import { Skills } from "../../from/resumeform/Skills";
import { Customization } from "../../from/resumeform/Customization";
import { Heading2 } from "../typography/Heading";



export default function ResumeForm({resumeData,setResumeData,className}: Readonly<IResumeFormProps>) {
   
    // PERSONAL INFO HANDLER
    const handleInputChange = (ev:ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
    >) => {
        const { name, value } = ev.target;
        setResumeData({
            ...resumeData,
            [name]: value
        });

    };

    // SELECT HANDLER
    const handleSelectChange = (ev:ChangeEvent<
        HTMLSelectElement
    >) => {
        const { name, value } = ev.target;
        setResumeData({
            ...resumeData,
            [name]: value
        });

    };

    // EDUCATION CHANGE HANDLER
    const handleEducationChange = (index: number,ev: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
    >) => {
        const { name, value } = ev.target;
        const updatedEducation = [...resumeData.education];

        updatedEducation[index] = {
            ...updatedEducation[index],
            [name]: value
        };

        setResumeData({
            ...resumeData,
            education: updatedEducation
        });

    };

    const handleExperienceChange = (index: number,ev: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement 
    >) => {
            const { name, value } = ev.target;

            const updatedExperience =
                [...resumeData.experience];
            updatedExperience[index] = {
                ...updatedExperience[index],
                [name]: value
            };
            setResumeData({
                ...resumeData,
                experience: updatedExperience
            });

         
        };

            

    return (
        <>
            <div className={`bg-white rounded-2xl shadow-md p-6 h-fit ${className || ""}`}>

                {/* PAGE TITLE */}
                <Heading2
                    maintext="Resume Details"
                    subtext="font-semibold text-gray-800 mb-6"
                />

                {/* PERSONAL INFO */}
                <PersonalInfoSection resumeData={resumeData} handleInputChange={handleInputChange} />
    

                {/* PROFILE SUMMARY */}
                <SummarySection resumeData={resumeData} handleInputChange={handleInputChange} />

                {/* WORK EXPERIENCE */}
                    <WorkExperienceSection
                        experience={resumeData.experience}
                        handler={handleExperienceChange}
                        addExperience={() => {
                            setResumeData({
                                ...resumeData,
                                experience: [
                                    ...resumeData.experience,
                                    {
                                        id: crypto.randomUUID(),
                                        company: "",
                                        position: "",
                                        startDate: "",
                                        endDate: "",
                                        description: ""
                                    }
                                ]
                            });
                        }}
                        removeExperience={(index) => {
                            const filteredExperience = resumeData.experience.filter((_, ind) => ind !== index);
                            setResumeData({
                                ...resumeData,
                                experience: filteredExperience
                            });
                        }}
                    />
                
            
                {/* EDUCATION */}
                    <EducationSection
                        education={resumeData.education}
                        handler={handleEducationChange}
                        addEducation={() => {
                                    setResumeData({
                                        ...resumeData,
                                        education: [
                                            ...resumeData.education,
                                            {
                                                id: crypto.randomUUID(),
                                                school: "",
                                                degree: "",
                                                startYear: "",
                                                endYear: ""
                                            }
                                        ]
                                    });
                                }}
                        removeEducation={(index: number) => {
                            const filteredEducation =
                                resumeData.education.filter((_, ind) => ind !== index);

                            setResumeData({
                                ...resumeData,
                                education: filteredEducation
                            });
                        }}
                    />

                {/* SKILLS */}
                <Skills
                    resumeData={resumeData}
                    setResumeData={setResumeData}
                />




                {/* CUSTOMIZATION */}
                <Customization resumeData={resumeData} handleSelectChange={handleSelectChange}/>

                <FormActionButton
                    submitBtnTxt="Create Resume"
                />

            </div>
        </>
    );
}