
import { useEffect, type ChangeEvent } from "react";
import { Heading2, Text } from "../typography/Heading";
import {FormInput,FormLable,FormSelect, FormTextArea} from "../../from/Input";
import { FormActionButton } from "../../from/Button";
import EducationSection from "../../from/EducationSection";
import { type IResumeData } from "../../types/FormTypes";
import WorkExperienceSection from "../../from/WorkExperienceSection";
import { type Dispatch, type SetStateAction } from "react";


export default function ResumeForm({resumeData,setResumeData}: {resumeData: IResumeData;setResumeData: Dispatch<SetStateAction<IResumeData>>;}) {
   
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

            useEffect(() => {
            console.log(resumeData);
        }, [resumeData]);

            

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
            <div className="bg-white rounded-2xl shadow-md p-6 h-fit">

                {/* PAGE TITLE */}
                <Heading2
                    maintext="Resume Details"
                    subtext="font-semibold text-gray-800 mb-6"
                />

                {/* PERSONAL INFO */}
                <div className="mb-8">

                    <Text className="font-semibold mb-4 text-gray-700">
                        Personal Information
                    </Text>

                    <div className="flex flex-col gap-4">

                        <FormInput
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                            handler={handleInputChange}
                            value={resumeData.fullname}
                        />

                        <FormInput
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            handler={handleInputChange}
                            value={resumeData.email}
                        />

                        <FormInput
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            handler={handleInputChange}
                            value={resumeData.phone}
                        />

                    </div>
                </div>

                {/* PROFILE SUMMARY */}
                <div className="mb-8">

                    <Text className="font-semibold mb-4 text-gray-700">
                        Profile Summary
                    </Text>

                    <FormTextArea
                        name="summary"
                        placeholder="Write a short professional summary..."
                        handler={handleInputChange}
                        value={resumeData.summary}
                    />

                </div>

                {/* WORK EXPERIENCE */}
                <div className="mb-8">
                    <Text className="font-semibold mb-4 text-gray-700">
                        Experience
                    </Text>
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
                </div>
                

                {/* EDUCATION */}
                <div className="mb-8">
                    <Text className="font-semibold mb-4 text-gray-700">
                        Education
                    </Text>

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

                </div>

                {/* SKILLS */}
                <div className="mb-8">

                    <Text className="font-semibold mb-4 text-gray-700">
                        Skills
                    </Text>

                    <FormTextArea
                        name="skills"
                        placeholder="Enter your skills"
                        handler={handleInputChange}
                        value={resumeData.skills}
                    />

                </div>

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