
import { useState, type BaseSyntheticEvent } from "react";
import { Heading2, Text } from "../typography/Heading";
import {FormInput,FormLable,FormSelect, FormTextArea} from "../../from/Input";
import { FormActionButton } from "../../from/Button";
import EducationSection from "../../from/EducationSection";

export interface IEducation {
    school: string;
    degree: string;
    startYear: string;
    endYear: string;
}

export interface IResumeData {
    fullname: string;
    email: string;
    phone: string;
    skills: string;
    template: string;
    font: string;

    education: IEducation[];
}

export default function ResumeForm() {

    const [resumeData, setResumeData] = useState<IResumeData>({
        fullname: "",
        email: "",
        phone: "",
        skills: "",
        template: "",
        font: "",

        education: [
            {
                school: "",
                degree: "",
                startYear: "",
                endYear: ""
            }
        ]
    });

    // PERSONAL INFO HANDLER
    const handleInputChange = (ev:BaseSyntheticEvent) => {
        const { name, value } = ev.target;
        setResumeData({
            ...resumeData,
            [name]: value
        });
        console.log(resumeData);
    };

    // SELECT HANDLER
    const handleSelectChange = (ev:BaseSyntheticEvent) => {
        const { name, value } = ev.target;
        setResumeData({
            ...resumeData,
            [name]: value
        });
        console.log(resumeData);
    };

    // EDUCATION CHANGE HANDLER
    const handleEducationChange = (index: number,ev: BaseSyntheticEvent) => {
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
        console.log(resumeData);
    };

    // ADD EDUCATION
    const addEducation = () => {
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
    };

    // REMOVE EDUCATION
    const removeEducation = (index: number) => {

        const filteredEducation =
            resumeData.education.filter((_, ind) => ind !== index);

        setResumeData({
            ...resumeData,
            education: filteredEducation
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
                        />

                        <FormInput
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            handler={handleInputChange}
                        />

                        <FormInput
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            handler={handleInputChange}
                        />

                    </div>
                </div>

                {/* EDUCATION */}
                <div className="mb-8">

                    <Text className="font-semibold mb-4 text-gray-700">
                        Education
                    </Text>

                    <EducationSection
                        education={resumeData.education}
                        handleEducationChange={handleEducationChange}
                        addEducation={addEducation}
                        removeEducation={removeEducation}
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
                        />
                        </div>
                        
                        <div>
                        <FormLable htmlFor="font">Font:</FormLable>
                        <FormSelect
                            name="font"
                            options={fontOptions}
                            handler={handleSelectChange}
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