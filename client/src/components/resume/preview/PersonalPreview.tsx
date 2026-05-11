import type { IResumePreviewProps } from "../../../types/PreviewTypes";

export default function PersonalPreview({resumeData,accentClass}: Readonly<IResumePreviewProps>) {
    return (
        <>
            <h1 className={`text-3xl font-bold text-gray-800 ${accentClass}`}>
                {resumeData.fullname || "Your Name"}
            </h1>

            <p className="text-gray-500 mt-2">
                {resumeData.email || "your.email@example.com"}
            </p>

            <p className="text-gray-500">
                {resumeData.phone}
            </p>

            <p className="text-gray-500">
                {resumeData.address}
            </p>
            <p className="text-gray-500">
                {resumeData.github}
            </p>
            <p className="text-gray-500">
                {resumeData.linkedin}
            </p>
        </>
    );
}