import { useState } from "react";
import ResumeForm from "../../components/resume/ResumeForm";
import ResumeLive from "../../components/resume/ResumeLive";
import bgImage from "../../assets/images/landingbg.jpg";
import { type IResumeData } from "../../types/FormTypes";


export const ResumeLayout = () => {
    const [resumeData, setResumeData] = useState<IResumeData>({
        fullname: "",
    email: "",
    phone: "",
    address: "",

    linkedin: "",
    github: "",

    summary: "",

    skills: [],

    template: "modern",
    font: "poppins",

    accentColor: "",

    education: [
        {
            id: crypto.randomUUID(),
            school: "",
            degree: "",
            startYear: "",
            endYear: ""
        }
    ],

    experience: [
        {
            id: crypto.randomUUID(),
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            description: ""
        }
    ],

    projects: [],

    certifications: []
    });

   

    return (
        <div
            className="h-screen flex p-5 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="w-full h-full bg-blue-50 rounded-2xl shadow-md p-5">

                {/* MAIN LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 h-full">

                    {/* LEFT - FORM (scrollable) */}
                    <div className="h-full overflow-y-auto pr-2">
                        <ResumeForm
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                        />
                    </div>

                    {/* RIGHT - PREVIEW (fixed scroll like Canva) */}
                    <div className="h-full overflow-y-auto">
                        
                            <ResumeLive resumeData={resumeData} />
                        
                    </div>

                </div>

            </div>
        </div>
    );
};