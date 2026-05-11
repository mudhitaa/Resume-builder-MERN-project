import { type IResumePreviewProps } from "../../types/PreviewTypes";
import { EducationPreview } from "./preview/EducationPreview";
import { ExperiencePreview } from "./preview/ExperiencePreview";
import PersonalPreview from "./preview/PersonalPreview";
import { SkillsPreview } from "./preview/SkillsPreview";
import { SummaryPreview } from "./preview/SummaryPreview";

export default function ResumeLive({resumeData,className}: Readonly<IResumePreviewProps>) {

    // FONT STYLES
    const fontClass =
        resumeData.font === "poppins"
            ? "font-poppins"
            : resumeData.font === "roboto"
            ? "font-roboto"
            : resumeData.font === "playfair"
            ? "font-playfair"
            : "font-inter";

    // ACCENT COLORS
const accentClass =
  resumeData.accentColor === "black"
    ? "text-black"
    :resumeData.accentColor === "blue"
    ? "text-blue-900"
    : resumeData.accentColor === "slate"
    ? "text-slate-700"
    : resumeData.accentColor === "emerald"
    ? "text-emerald-800"
    : resumeData.accentColor === "amber"
    ? "text-amber-700"
    : "text-rose-700";
            

    return (
        <div className={` bg-white ${fontClass} rounded-2xl shadow-md p-6 ${className || ""}  `}
        >

            {/* TITLE */}
            <h2 className="text-2xl font-semibold mb-6">
                Live Resume Preview
            </h2>

            {/* RESUME CONTAINER */}
            <div className="border border-dashed border-gray-300 rounded-xl p-8 text-black bg-white">

                {/* PERSONAL INFO */}
                <PersonalPreview
                    resumeData={resumeData}
                    accentClass={accentClass}
                />

                {/* SUMMARY */}
                <SummaryPreview
                    resumeData={resumeData}
                    accentClass={accentClass}
                />

                {/* EXPERIENCE */}
                <ExperiencePreview
                    resumeData={resumeData}
                    accentClass={accentClass}
                />

                {/* EDUCATION */}
                <EducationPreview
                    resumeData={resumeData}
                    accentClass={accentClass}
                />

                {/* SKILLS */}
                <SkillsPreview
                    resumeData={resumeData}
                    accentClass={accentClass}
                />

            </div>
        </div>
    );
}