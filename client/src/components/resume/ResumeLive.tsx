
import { type IResumePreviewProps } from "../../types/PreviewTypes";

import ModernTemplate from "./templates/Mordern";
import ClassicTemplate from "./templates/Classic";
import MinimalTemplate from "./templates/Minimal";

export default function ResumeLive({
    resumeData,
    className
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

            {/* TITLE */}
            <h2 className="text-2xl font-semibold mb-6">
                Live Resume Preview
            </h2>

            {/* RESUME CONTAINER */}
            <div
                className={`border border-dashed border-gray-300 rounded-xl bg-white ${fontClass}`}
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

