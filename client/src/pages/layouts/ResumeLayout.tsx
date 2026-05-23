import { useState,useEffect } from "react";
import ResumeForm from "../../components/resume/ResumeForm";
import ResumeLive from "../../components/resume/ResumeLive";
import bgImage from "../../assets/images/landingbg.jpg";
import { type IResumeData } from "../../types/FormTypes";
import { getMyResume,saveResume } from "../../services/ResumeService";
import { toast } from "sonner";

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

    // LOAD USER RESUME
    useEffect(() => {
        const loadResume = async () => {
            try {
                const resume =
                    await getMyResume();
                if (resume) {
                    setResumeData(resume);
                }
            } catch (error) {
                console.log(error);
            }
        };
        loadResume();
    }, []);


    // SAVE RESUME
    const handleSaveResume = async () => {
        try {
            await saveResume(resumeData);
            toast.success("Resume saved successfully");
        } catch (error) {
            toast.error("Failed to save resume");
            console.log(error);
        }
    };


    return (
        <div
            className="h-screen flex p-5 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="w-full h-full bg-blue-50 rounded-2xl shadow-md p-5">

                {/* MAIN */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 h-full">

                    {/* LEFT */}
                    <div className="h-full overflow-y-auto pr-2">
                        <ResumeForm
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                            onSave={handleSaveResume}
                        />
                    </div>

                    {/* RIGHT  */}
                    <div className="h-full overflow-y-auto">
                            <ResumeLive resumeData={resumeData} />
                        
                    </div>

                </div>

            </div>
        </div>
    );
};