import type { IResumePreviewProps } from "../../../types/PreviewTypes";

export default function PersonalPreview({resumeData,accentClass}: Readonly<IResumePreviewProps>) {
    return (
        <>
            <h1 className={`text-3xl font-bold text-black ${accentClass}`}>
                {resumeData.fullname || "Alexander Baker"}
            </h1>

            <p className="text-gray-600 mt-2">
                {resumeData.email || "alexander.baker@gmail.com"}
            </p>

            <p className="text-gray-600">
                {resumeData.phone || "+1 (555) 123-4567"}
            </p>

            <p className="text-gray-600">
                {resumeData.address || "Los Angeles, California, USA"}
            </p>
            <p className="text-gray-600">
                {resumeData.github || "github.com/alexbaker"}
            </p>
            <p className="text-gray-600">
                {resumeData.linkedin || "linkedin.com/in/alexbaker"}
            </p>
        </>
    );
}