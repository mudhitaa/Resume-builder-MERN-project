import type { ITemplateProps } from "../../../types/PreviewTypes";

import PersonalPreview from "../preview/PersonalPreview";
import { SummaryPreview } from "../preview/SummaryPreview";
import { ExperiencePreview } from "../preview/ExperiencePreview";
import { EducationPreview } from "../preview/EducationPreview";
import { SkillsPreview } from "../preview/SkillsPreview";
import { ProjectsPreview } from "../preview/ProjectPreview";
import { CertificationPreview } from "../preview/CertificationPreview";

export default function ClassicTemplate({
    resumeData,
    fontClass,isPDF=false
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

        if (!isPDF) {
            return (
                <div className={`bg-white p-10 ${fontClass} `}>

                    <header className="text-center">
                        <PersonalPreview
                            resumeData={resumeData}
                            accentClass={accentClass}
                        />
                    </header>

                    <main className="mt-8 space-y-10">

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

                        <SkillsPreview
                            resumeData={resumeData}
                            accentClass={accentClass}
                        />
                        <EducationPreview
                            resumeData={resumeData}
                            accentClass={accentClass}
                        />


                        <CertificationPreview
                            resumeData={resumeData}
                            accentClass={accentClass}
                        />

                    </main>

                </div>
            );
        }

        return (
            <div id="resume-content">

                {/* PAGE 1 */}
                <div className={`resume-page bg-white p-10 ${fontClass}`}>

                    <header className="text-center">
                        <PersonalPreview
                            resumeData={resumeData}
                            accentClass={accentClass}
                        />
                    </header>

                    <main className="mt-8 space-y-10">

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
                        <SkillsPreview
                        resumeData={resumeData}
                        accentClass={accentClass}
                         />

                    </main>

                </div>

                {/* PAGE 2 */}
                <div className={`resume-page space-y-10  bg-white p-10 ${fontClass}`}>

                    <EducationPreview
                        resumeData={resumeData}
                        accentClass={accentClass}
                    />

                    <CertificationPreview
                        resumeData={resumeData}
                        accentClass={accentClass}
                    />

                </div>

            </div>
        );
}