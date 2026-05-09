
import { useEffect, type ChangeEvent } from "react";
import { Heading2, Text } from "../typography/Heading";
import {FormLable,FormSelect, FormTextArea} from "../../from/Input";
import { FormActionButton } from "../../from/Button";
import EducationSection from "../../from/resume/EducationSection";
import { type IResumeData } from "../../types/FormTypes";
import WorkExperienceSection from "../../from/resume/WorkExperienceSection";
import { type Dispatch, type SetStateAction } from "react";
import { PersonalInfoSection } from "../../from/resume/PersonalInfo";
import { SummarySection } from "../../from/resume/Summary";
import { Skills } from "../../from/resume/Skills";


export default function ResumeForm({resumeData,setResumeData,className}: {resumeData: IResumeData;setResumeData: Dispatch<SetStateAction<IResumeData>>;className?: string;}) {
   
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

            

    const templateOptions = [
        { label: "Modern Template", value: "modern" },
        { label: "Classic Template", value: "classic" },
        { label: "Minimal Template", value: "minimal" }
    ];

    const fontOptions = [
        { label: "Poppins", value: "poppins" },
        { label: "Roboto", value: "roboto" },
        { label: "Inter", value: "inter" }
    ];

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
                <Skills handleInputChange={handleInputChange} resumeData={resumeData} />


                {/* CUSTOMIZATION */}
                <div className="mb-8">

                    <Text className="font-semibold mb-4 text-gray-700">
                        Resume Customization
                    </Text>

                    <div className="flex  flex-col gap-4">
                        <div className="">
                            <FormLable htmlFor="template">Template:</FormLable>
                            <FormSelect
                            name="template"
                            options={templateOptions}
                            handler={handleSelectChange}
                            value={resumeData.template}
                        />
                        </div>
                        
                        <div>
                        <FormLable htmlFor="font">Font:</FormLable>
                        <FormSelect
                            name="font"
                            options={fontOptions}
                            handler={handleSelectChange}
                            value={resumeData.font}
                        />

                        </div>
                        
                    </div>
                </div>

                <FormActionButton
                    submitBtnTxt="Create Resume"
                />

            </div>
        </>
    );
}