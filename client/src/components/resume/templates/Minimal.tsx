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

    const accentClass =
        resumeData.accentColor === "rose"
            ? "text-rose-700"
            : resumeData.accentColor === "blue"
            ? "text-blue-900"
            : resumeData.accentColor === "black"
            ? "text-black"
            : resumeData.accentColor === "emerald"
            ? "text-emerald-800"
            : resumeData.accentColor === "amber"
            ? "text-amber-700"
            : "text-slate-800";

    return (
        <div className={`resume-page bg-white p-8 text-sm ${fontClass}`}>

            {/* HEADER */}
            <header>

                <h1 className={`text-3xl font-bold ${accentClass}`}>
                    {resumeData.fullname || "Alexander Baker"}
                </h1>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-xs text-gray-600">

                    {/* EMAIL */}
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-gray-500 text-xs" />
                        <span>{resumeData.email || "alexander.baker@gmail.com"}</span>
                    </div>

                    {/* PHONE */}
                    <div className="flex items-center gap-2">
                        <FaPhone className="text-gray-500 text-xs" />
                        <span>{resumeData.phone || "+1 (555) 123-4567"}</span>
                    </div>

                    {/* ADDRESS */}
                    <div className="flex items-center gap-2">
                        <FaLocationDot className="text-gray-500 text-xs" />
                        <span>{resumeData.address || "Los Angeles, California, USA"}</span>
                    </div>

                    {/* GITHUB */}
                    {resumeData.github && (
                        <div className="flex items-center gap-2">
                            <FaGithub className="text-gray-500 text-xs" />
                            <span>
                                <a href={resumeData.github} className="text-gray-600">
                                {resumeData.github}
                                </a>
                            </span>
                        </div>
                    )}

                    {/* LINKEDIN */}
                    <div className="flex items-center gap-2">
                        <FaLinkedin className="text-gray-500 text-xs" />
                        <span>
                            <a href={resumeData.linkedin} className="text-gray-600">
                                {resumeData.linkedin || "linkedin.com/in/alexbaker"}
                            </a>
                        </span>
                    </div>

                </div>

            </header>

            {/* BODY */}
            <main className="grid grid-cols-12 gap-8 mt-4 text-sm">

                {/* LEFT */}
                <section className="col-span-7 space-y-8">

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
                <aside className="col-span-5 space-y-8">

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