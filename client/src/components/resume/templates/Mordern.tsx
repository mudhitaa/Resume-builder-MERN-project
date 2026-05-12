// templates/Classic.tsx

import type { ITemplateProps } from "../../../types/PreviewTypes";

import { SummaryPreview } from "../preview/SummaryPreview";
import { ExperiencePreview } from "../preview/ExperiencePreview";
import { EducationPreview } from "../preview/EducationPreview";
import { SkillsPreview } from "../preview/SkillsPreview";
import { ProjectsPreview } from "../preview/ProjectPreview";
import { CertificationPreview } from "../preview/CertificationPreview";

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

            {/* ================= HEADER ================= */}
            <header className="grid grid-cols-2 gap-10 pb-5">

                {/* LEFT */}
                <div>

                    <h1 className={`text-5xl uppercase tracking-wide font-light ${accentClass}`}>
                        {resumeData.fullname || "Alexander Baker"}
                    </h1>

               
                </div>

                {/* RIGHT */}
                <div className="border-l pl-8 space-y-3 text-sm text-gray-700">

                    <p>{resumeData.phone || "+1 (555) 123-4567"}</p>

                    <p className="break-all">
                        {resumeData.email || "alexander.baker@gmail.com"}
                    </p>
                    <p>{resumeData.address || "Los Angeles, California, USA"}</p>
                    <p>{resumeData.linkedin || "linkedin.com/in/alexbaker"}</p>
                    <span>{resumeData.github}</span>

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