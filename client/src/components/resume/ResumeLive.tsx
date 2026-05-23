
import { type IResumePreviewProps } from "../../types/PreviewTypes";

import ModernTemplate from "./templates/Mordern";
import ClassicTemplate from "./templates/Classic";
import MinimalTemplate from "./templates/Minimal";

export default function ResumeLive({
    resumeData,
    className,
    isPDF
}: Readonly<IResumePreviewProps>) {

    // FONT STYLES
    const fontClass =
        resumeData.font === "poppins"
            ? "font-poppins"
            : resumeData.font === "roboto"
            ? "font-roboto"
            : resumeData.font === "playfair"
            ? "font-playfair"
            : "font-inter";


    return (
        <div
            className={`bg-white rounded-2xl shadow-md p-6 ${className || ""}`}
        >
            <div
                className={`bg-white ${fontClass}`}
            >
                <div id="resume-pdf" >
                    {resumeData.template === "modern" && (
                        <ModernTemplate
                            resumeData={resumeData}
                            fontClass={fontClass}
                        />
                    )}

                    {resumeData.template === "classic" && (
                        <ClassicTemplate
                            resumeData={resumeData}
                            fontClass={fontClass}
                            isPDF={isPDF}
                        />
                    )}

                    {resumeData.template === "minimal" && (
                        <MinimalTemplate
                            resumeData={resumeData}
                            fontClass={fontClass}
                        />
                    )}
                </div>

            </div>
        </div>
    );
}

