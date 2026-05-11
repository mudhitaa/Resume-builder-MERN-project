import type { IResumePreviewProps } from "../../../types/PreviewTypes"
export const SummaryPreview = ({resumeData,accentClass}: Readonly<IResumePreviewProps>) => {
    return (
                <div className="mt-6">
                    <h3 className={`text-xl font-semibold mb-2 ${accentClass}`}>
                        Summary
                    </h3>
                    <p className="text-gray-700">
                        {resumeData.summary || "Passionate Full Stack Developer with experience building scalable web applications using React, Node.js, TypeScript, and MongoDB. Skilled in designing responsive user interfaces, developing REST APIs, and creating user-focused digital experiences."}
                    </p>
                </div>
    )
}
