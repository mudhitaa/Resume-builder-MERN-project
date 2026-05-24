import { useState } from "react";
import { type IResumePreviewProps } from "../../types/PreviewTypes";
import ModernTemplate from "./templates/Mordern";
import ClassicTemplate from "./templates/Classic";
import MinimalTemplate from "./templates/Minimal";

export default function ResumeLive({
    resumeData,
    className,
    isPDF
}: Readonly<IResumePreviewProps>) {

    const [zoom, setZoom] = useState(100);

    const fontClass =
        resumeData.font === "poppins" ? "font-poppins"
        : resumeData.font === "roboto" ? "font-roboto"
        : resumeData.font === "playfair" ? "font-playfair"
        : "font-inter";

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 150));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 20));
    const handleReset = () => setZoom(100);

    return (
        <div className={`bg-white rounded-2xl shadow-md p-6 ${className || ""}`}>

            {/* ZOOM CONTROLS*/}
            {!isPDF && (
                <div className="flex items-center justify-end gap-2 mb-3">
                    <button
                        onClick={handleZoomOut}
                        className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-lg flex items-center justify-center transition-all"
                    >
                        −
                    </button>
                    <span
                        onClick={handleReset}
                        className="text-xs text-gray-500 font-medium w-10 text-center cursor-pointer hover:text-blue-500 transition-all"
                        title="Click to reset"
                    >
                        {zoom}%
                    </span>
                    <button
                        onClick={handleZoomIn}
                        className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-lg flex items-center justify-center transition-all"
                    >
                        +
                    </button>
                </div>
            )}

            {/* RESUME CONTENT */}
            <div
                className={`bg-white ${fontClass}`}
                style={{
                    transform: `scale(${zoom / 100})`,
                    transformOrigin: "top center",
                    // keeps container height in sync with scaled content
                    marginBottom: `${(zoom - 100) * 3}px`
                }}
            >
                <div id="resume-pdf">
                    {resumeData.template === "modern" && (
                        <ModernTemplate resumeData={resumeData} fontClass={fontClass} />
                    )}
                    {resumeData.template === "classic" && (
                        <ClassicTemplate resumeData={resumeData} fontClass={fontClass} isPDF={isPDF} />
                    )}
                    {resumeData.template === "minimal" && (
                        <MinimalTemplate resumeData={resumeData} fontClass={fontClass} />
                    )}
                </div>
            </div>

        </div>
    );
}