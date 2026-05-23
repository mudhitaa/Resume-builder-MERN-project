// templates/Classic.tsx

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

export default function ClassicTemplate({
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
        <div className={`bg-white p-12 ${fontClass}`}>

        <header className="grid grid-cols-2 gap-10 pb-0">
            {/* LEFT */}
            <div>
                <h1
                    className={`
                        text-5xl
                        uppercase
                        tracking-wide
                        font-light
                        ${accentClass}
                    `}
                >
                    {resumeData.fullname || "Alexander Baker"}
                </h1>

            </div>

            {/* RIGHT */}
            <div className="border-l pl-8 space-y-4 text-sm text-gray-700">

                {/* PHONE */}
                <div className="flex items-center gap-3">
                    <FaPhone className="text-gray-500 text-sm" />

                    <p>
                        {resumeData.phone || "+1 (555) 123-4567"}
                    </p>
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-3">
                    <FaEnvelope className="text-gray-500 text-sm" />

                    <p className="break-all">
                        {resumeData.email || "alexander.baker@gmail.com"}
                    </p>
                </div>

                {/* ADDRESS */}
                <div className="flex items-center gap-3">
                    <FaLocationDot className="text-gray-500 text-sm" />

                    <p>
                        {resumeData.address || "Los Angeles, California, USA"}
                    </p>
                </div>

                {/* LINKEDIN */}
                <div className="flex items-center gap-3">
                    <FaLinkedin className="text-gray-500 text-sm" />
                        <a href={resumeData.linkedin} className="text-gray-600">
                            {resumeData.linkedin || "linkedin.com/in/alexbaker"}
                        </a>
                </div>

                    {/* GITHUB */}
                    {resumeData.github && (
                        <div className="flex items-center gap-3">
                            <FaGithub className="text-gray-500 text-sm" />
                            <span>
                                <a href={resumeData.github} className="text-gray-600">
                                {resumeData.github}
                                </a>
                            </span>
                        </div>
                    )}

            </div>

        </header>

            {/* ================= BODY ================= */}
            <main className="grid grid-cols-12 gap-10 mt-5">

                {/* LEFT */}
                <section className="col-span-8 space-y-12">

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
                <aside className="col-span-4 border-l pl-8 space-y-10">

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