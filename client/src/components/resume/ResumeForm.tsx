import { type ChangeEvent } from "react";
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

export default function ResumeForm({
    resumeData,
    setResumeData,
    className,
    onSave,
    onGeneratePDF   // ← new prop
}: Readonly<IResumeFormProps>) {

    const handleInputChange = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = ev.target;
        setResumeData({ ...resumeData, [name]: value });
    };

    const handleSelectChange = (ev: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = ev.target;
        setResumeData({ ...resumeData, [name]: value });
    };

    const handleEducationChange = (index: number, ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = ev.target;
        const updatedEducation = [...resumeData.education];
        updatedEducation[index] = { ...updatedEducation[index], [name]: value };
        setResumeData({ ...resumeData, education: updatedEducation });
    };

    const handleExperienceChange = (index: number, ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = ev.target;
        const updatedExperience = [...resumeData.experience];
        updatedExperience[index] = { ...updatedExperience[index], [name]: value };
        setResumeData({ ...resumeData, experience: updatedExperience });
    };

    const handleProjectChange = (index: number, ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = ev.target;
        const updatedProjects = [...resumeData.projects];
        updatedProjects[index] = { ...updatedProjects[index], [name]: value };
        setResumeData({ ...resumeData, projects: updatedProjects });
    };

    const handleCeertificatinChange = (index: number, ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = ev.target;
        const updatedCertifications = [...resumeData.certifications];
        updatedCertifications[index] = { ...updatedCertifications[index], [name]: value };
        setResumeData({ ...resumeData, certifications: updatedCertifications });
    };

    return (
        <>
            <div className={`bg-white rounded-2xl shadow-md p-6 h-fit ${className || ""}`}>

                <Heading2
                    maintext="Resume Details"
                    subtext="font-semibold text-gray-800 mb-6"
                />

                <PersonalInfoSection resumeData={resumeData} handleInputChange={handleInputChange} />
                <SummarySection resumeData={resumeData} handleInputChange={handleInputChange} />

                <WorkExperienceSection
                    experience={resumeData.experience}
                    handler={handleExperienceChange}
                    addExperience={() => {
                        setResumeData({
                            ...resumeData,
                            experience: [...resumeData.experience, {
                                id: crypto.randomUUID(),
                                company: "", position: "", startDate: "", endDate: "", description: ""
                            }]
                        });
                    }}
                    removeExperience={(index) => {
                        setResumeData({
                            ...resumeData,
                            experience: resumeData.experience.filter((_, i) => i !== index)
                        });
                    }}
                />

                <ProjectsSection
                    projects={resumeData.projects}
                    handler={handleProjectChange}
                    addProject={() => {
                        setResumeData({
                            ...resumeData,
                            projects: [...resumeData.projects, {
                                id: crypto.randomUUID(),
                                title: "", description: "", githubLink: ""
                            }]
                        });
                    }}
                    removeProject={(index) => {
                        setResumeData({
                            ...resumeData,
                            projects: resumeData.projects.filter((_, i) => i !== index)
                        });
                    }}
                />

                <EducationSection
                    education={resumeData.education}
                    handler={handleEducationChange}
                    addEducation={() => {
                        setResumeData({
                            ...resumeData,
                            education: [...resumeData.education, {
                                id: crypto.randomUUID(),
                                school: "", degree: "", startYear: "", endYear: ""
                            }]
                        });
                    }}
                    removeEducation={(index) => {
                        setResumeData({
                            ...resumeData,
                            education: resumeData.education.filter((_, i) => i !== index)
                        });
                    }}
                />

                <Skills resumeData={resumeData} setResumeData={setResumeData} />

                <CertificationSection
                    certification={resumeData.certifications}
                    handler={handleCeertificatinChange}
                    addCertification={() => {
                        setResumeData({
                            ...resumeData,
                            certifications: [...resumeData.certifications, {
                                id: crypto.randomUUID(),
                                name: "", issuer: "", date: "", description: "", credentialId: ""
                            }]
                        });
                    }}
                    removeCertification={(index) => {
                        setResumeData({
                            ...resumeData,
                            certifications: resumeData.certifications.filter((_, i) => i !== index)
                        });
                    }}
                />

                <Customization resumeData={resumeData} handleSelectChange={handleSelectChange} />

                <div className="flex gap-4">
                    <FormActionButton
                        submitBtnTxt="Create PDF"
                        onClick={onGeneratePDF}  // ← now uses prop
                        type="button"
                    />
                    <FormActionButton
                        submitBtnTxt="Save"
                        onClick={onSave}
                        type="button"
                    />
                </div>

            </div>
        </>
    );
}