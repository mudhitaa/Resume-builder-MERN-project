// templates/Minimal.tsx

import type { ITemplateProps } from "../../../types/PreviewTypes";

import { SummaryPreview } from "../preview/SummaryPreview";
import { ExperiencePreview } from "../preview/ExperiencePreview";
import { EducationPreview } from "../preview/EducationPreview";
import { SkillsPreview } from "../preview/SkillsPreview";
import { ProjectsPreview } from "../preview/ProjectPreview";
import { CertificationPreview } from "../preview/CertificationPreview";

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

            {/* ================= HEADER ================= */}
            <header>

                <h1 className={`text-4xl font-bold ${accentClass}`}>
                    {resumeData.fullname || "Alexander Baker"}
                </h1>

                <div className="flex flex-wrap gap-6 mt-3 text-sm text-gray-600">

                    <span>{resumeData.email || "alexander.baker@gmail.com"}</span>

                    <span>{resumeData.phone || "+1 (555) 123-4567"}</span>

                    <span>{resumeData.address || "Los Angeles, California, USA"}</span>

                    <span>{resumeData.github }</span>

                    <span>{resumeData.linkedin || "linkedin.com/in/alexbaker"}</span>
                    

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