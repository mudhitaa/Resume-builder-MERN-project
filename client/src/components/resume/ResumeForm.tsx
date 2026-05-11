
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
import { ProjectsSection } from "../../from/resumeform/ProjectsSection";
import { CertificationSection } from "../../from/resumeform/CretificationSection";



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
    //experience handler
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
    //certification handler
    const handleProjectChange = (index: number,ev: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement 
    >) => {
            const { name, value } = ev.target;

            const updatedProjects=
                [...resumeData.projects];
            updatedProjects[index] = {
                ...updatedProjects[index],
                [name]: value
            };
            setResumeData({
                ...resumeData,
                projects: updatedProjects
            });

         
        };
    //certification handler
    const handleCeertificatinChange = (index: number,ev: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement 
    >) => {
            const { name, value } = ev.target;

            const updatedCertifications=
                [...resumeData.certifications];
            updatedCertifications[index] = {
                ...updatedCertifications[index],
                [name]: value
            };
            setResumeData({
                ...resumeData,
                certifications: updatedCertifications
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
                {/* projects */}
                        <ProjectsSection projects={resumeData.projects} handler={handleProjectChange} 
                        addProject={() => {
                            setResumeData({
                                ...resumeData,
                                projects: [
                                    ...resumeData.projects,
                                    {
                                        id: crypto.randomUUID(),
                                        title:"",
                                        description:"",
                                        githubLink:"",
                                    }
                                ]
                            });
                        }}
                        removeProject={(index) => {
                            const filteredProjects = resumeData.projects.filter((_, ind) => ind !== index);
                            setResumeData({
                                ...resumeData,
                                projects: filteredProjects
                            });
                        }}/>
            
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
                {/* certification */}
                    <CertificationSection 
                    certification={resumeData.certifications} 
                    handler={handleCeertificatinChange}
                    addCertification={() => {
                            setResumeData({
                                ...resumeData,
                                certifications: [
                                    ...resumeData.certifications,
                                    {
                                        id: crypto.randomUUID(),
                                        name: "",
                                        issuer: "",
                                        date: "",
                                        description: "",
                                        credentialId: "",
                                        credentialUrl: ""
                                    }
                                ]
                            });
                        }}
                    removeCertification={(index: number) => {
                            const filtered = resumeData.certifications.filter((_, i) => i !== index);
                    
                            setResumeData({
                                ...resumeData,
                                certifications: filtered
                            });
                    }}
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