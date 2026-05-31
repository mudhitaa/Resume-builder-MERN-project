import { useState, useEffect } from "react";
import ResumeForm from "../../components/resume/ResumeForm";
import ResumeLive from "../../components/resume/ResumeLive";
import bgImage from "../../assets/images/landingbg.jpg";
import { type IResumeData } from "../../types/FormTypes";
import { getMyResume, saveResume } from "../../services/ResumeService";
import { toast } from "sonner";

export const ResumeLayout = () => {
    const [activeTab, setActiveTab] = useState<"form" | "preview">("form");
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
        education: [{
            id: crypto.randomUUID(),
            school: "", degree: "", startYear: "", endYear: ""
        }],
        experience: [{
            id: crypto.randomUUID(),
            company: "", position: "", startDate: "", endDate: "", description: ""
        }],
        projects: [],
        certifications: []
    });

    useEffect(() => {
        const loadResume = async () => {
            try {
                const resume = await getMyResume();
                if (resume) setResumeData(resume);
            } catch (error) {
                console.log(error);
            }
        };
        loadResume();
    }, []);

    const handleSaveResume = async () => {
        try {
            await saveResume(resumeData);
            toast.success("Resume saved successfully");
        } catch (error) {
            toast.error("Failed to save resume");
        }
    };

    return (
    <div
        className="h-screen flex p-3 sm:p-5 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
    >
        <div className="w-full bg-blue-50 rounded-2xl shadow-md p-3 sm:p-5 flex flex-col overflow-hidden">

            {/* MOBILE TABS */}
            <div className="flex lg:hidden mb-3 bg-white rounded-xl p-1 shadow-sm shrink-0">
                <button
                    onClick={() => setActiveTab("form")}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === "form"
                            ? "bg-blue-800 text-white shadow"
                            : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                     Edit Resume
                </button>
                <button
                    onClick={() => setActiveTab("preview")}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === "preview"
                            ? "bg-blue-800 text-white shadow"
                            : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                    Preview
                </button>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4 sm:gap-6 flex-1 min-h-0 overflow-hidden">

                {/* LEFT — Form */}
                <div className={`
                    overflow-y-auto pr-1 min-h-0
                    ${activeTab === "form" ? "block" : "hidden"}
                    lg:block
                `}>
                    <ResumeForm
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                        onSave={handleSaveResume}
                    />
                </div>

                {/* RIGHT — Preview */}
                <div className={`
                    overflow-y-auto min-h-0
                    ${activeTab === "preview" ? "block" : "hidden"}
                    lg:block
                `}>
                    <ResumeLive resumeData={resumeData} />
                </div>
            </div>

            {/* PDF */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: "-99999px",
                    width: "210mm",
                    zIndex: -1,
                    pointerEvents: "none",
                    opacity: 0,         
                }}
            >
                <ResumeLive resumeData={resumeData} isPDF={true} />
            </div>

        </div>
    </div>
);
};