import type { IResumePreviewProps } from "../../../types/PreviewTypes"
import { TiUser } from "react-icons/ti";
export const SummaryPreview = ({resumeData,accentClass}: Readonly<IResumePreviewProps>) => {
    return (
                <div className="mt-6">
                    <div className={`flex items-center gap-2 mb-3 border-b ${accentClass}`}>
                                            <TiUser className={`text-lg mb-1`} />
                                            <h3
                                                className={`text-xl font-semibold pb-1 flex-1 `}
                                            >
                                                Summary
                                            </h3>
                    
                        </div>
                    <p className="text-gray-700 text-justify">
                        {resumeData.summary || "Passionate Full Stack Developer with experience building scalable web applications using React, Node.js, TypeScript, and MongoDB. Skilled in designing responsive user interfaces, developing REST APIs, and creating user-focused digital experiences."}
                    </p>
                </div>
    )
}
