// templates/Minimal.tsx

import type { ITemplateProps } from "../../../types/PreviewTypes";
import { SummaryPreview } from "../preview/SummaryPreview";
import { ExperiencePreview } from "../preview/ExperiencePreview";
import { EducationPreview } from "../preview/EducationPreview";
import { SkillsPreview } from "../preview/SkillsPreview";
import { ProjectsPreview } from "../preview/ProjectPreview";
import { CertificationPreview } from "../preview/CertificationPreview";


import {
    FaEnvelope,
    FaPhone,
    FaLocationDot,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa6";

export default function MinimalTemplate({
    resumeData,
    fontClass,
   
}: Readonly<ITemplateProps>) {
// ACCENT COLORS
    const accentClass =
    resumeData.accentColor === "rose"
        ? "text-rose-700"
        :resumeData.accentColor === "blue"
        ? "text-blue-900"
        : resumeData.accentColor === "black"
        ? "text-black"
        : resumeData.accentColor === "emerald"
        ? "text-emerald-800"
        : resumeData.accentColor === "amber"
        ? "text-amber-700"
        : "text-slate-800";
    return (
        <div className={`bg-white p-10 ${fontClass}`}>

           <header>

                <h1 className={`text-4xl font-bold ${accentClass}`}>
                    {resumeData.fullname || "Alexander Baker"}
                </h1>

                <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4 text-sm text-gray-600">

                    {/* EMAIL */}
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-gray-500 text-sm" />

                        <span>
                            {resumeData.email || "alexander.baker@gmail.com"}
                        </span>
                    </div>

                    {/* PHONE */}
                    <div className="flex items-center gap-2">
                        <FaPhone className="text-gray-500 text-sm" />

                        <span>
                            {resumeData.phone || "+1 (555) 123-4567"}
                        </span>
                    </div>

                    {/* ADDRESS */}
                    <div className="flex items-center gap-2">
                        <FaLocationDot className="text-gray-500 text-sm" />

                        <span>
                            {resumeData.address || "Los Angeles, California, USA"}
                        </span>
                    </div>

                    {/* GITHUB */}
                    {resumeData.github && (
                        <div className="flex items-center gap-3">
                            <FaGithub className="text-gray-500 text-sm" />
                            <span>
                                {resumeData.github}
                            </span>
                        </div>
                    )}

                    {/* LINKEDIN */}
                    <div className="flex items-center gap-2">
                        <FaLinkedin className="text-gray-500 text-sm" />

                        <span>
                            {resumeData.linkedin || "linkedin.com/in/alexbaker"}
                        </span>
                    </div>

                </div>

            </header>

            {/* ================= BODY ================= */}
            <main className="grid grid-cols-12 gap-10 mt-5">

                {/* LEFT */}
                <section className="col-span-7 space-y-10">

                    <SummaryPreview
                        resumeData={resumeData}
                        accentClass={accentClass}
                    />

                    <ExperiencePreview
                        resumeData={resumeData}
                        accentClass={accentClass}
                    />

                    <ProjectsPreview
                        resumeData={resumeData}
                        accentClass={accentClass}
                    />

                </section>

                {/* RIGHT */}
                <aside className="col-span-5 space-y-10">

                    <EducationPreview
                        resumeData={resumeData}
                        accentClass={accentClass}
                    />

                    <SkillsPreview
                        resumeData={resumeData}
                        accentClass={accentClass}
                    />

                    <CertificationPreview
                        resumeData={resumeData}
                        accentClass={accentClass}
                    />

                </aside>

            </main>

        </div>
    );
}