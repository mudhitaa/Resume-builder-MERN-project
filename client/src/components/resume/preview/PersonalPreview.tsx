import type { IResumePreviewProps } from "../../../types/PreviewTypes";

export default function PersonalPreview({resumeData,accentClass}: Readonly<IResumePreviewProps>) {
    return (
        <>
            <h1 className={`text-3xl font-bold text-black ${accentClass}`}>
                {resumeData.fullname || "Alexander Baker"}
            </h1>

            <div className="flex justify-between items-start mt-4">

                {/* LEFT */}
                <div className="space-y-2 text-left">
                    <p className="text-gray-600">
                        {resumeData.email || "alexander.baker@gmail.com"}
                    </p>

                    <p className="text-gray-600">
                        {resumeData.linkedin || "linkedin.com/in/alexbaker"}
                    </p>

                    <p className="text-gray-600">
                        {resumeData.github}
                    </p>
                </div>

                {/* RIGHT */}
                <div className="space-y-2 text-right ">
                    <p className="text-gray-600">
                        {resumeData.phone || "+1 (555) 123-4567"}
                    </p>

                    <p className="text-gray-600">
                        {resumeData.address || "Los Angeles, California, USA"}
                    </p>
                </div>

            </div>
        </>
    );
}