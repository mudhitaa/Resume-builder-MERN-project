
import { type IResumeFormProps } from "../../types/FormTypes";
import { EducationPreview } from "./preview/EducationPreview";
import { ExperiencePreview } from "./preview/ExperiencePreview";
import PersonalPreview from "./preview/PersonalPreview";
import { SkillsPreview } from "./preview/SkillsPreview";
import { SummaryPreview } from "./preview/SummaryPreview";

export default function ResumeLive({ resumeData,className }: Readonly<IResumeFormProps>) {
    return (
        <div className={`bg-white rounded-2xl shadow-md p-6 ${className || ""}`}>

            <h2 className="text-2xl font-semibold mb-6">
                Live Resume Preview
            </h2>

            <div className="border border-dashed border-gray-300 rounded-xl p-6">

                {/* NAME */}
                <PersonalPreview resumeData={resumeData} />

                {/* SUMMARY */}
                <SummaryPreview resumeData={resumeData} />

                {/* EXPERIENCE */}
                <ExperiencePreview resumeData={resumeData} />

                {/* EDUCATION */}
                <EducationPreview resumeData={resumeData} />

                {/* SKILLS */}
                <SkillsPreview resumeData={resumeData} />

            </div>
        </div>
    );
}