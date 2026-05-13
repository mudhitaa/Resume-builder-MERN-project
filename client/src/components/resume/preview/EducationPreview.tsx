import {type IResumePreviewProps } from "../../../types/PreviewTypes"
import { FaGraduationCap } from "react-icons/fa6"
export const EducationPreview = ({resumeData,accentClass}: Readonly<IResumePreviewProps>) => {
    return(
            <div className="mt-6">
                    <div className={`flex items-center gap-2 mb-3 border-b ${accentClass}`}>
                        <FaGraduationCap className={`text-lg mb-1`} />
                        <h3
                            className={`text-xl font-semibold  pb-1 flex-1  `}
                        >
                            Education
                        </h3>

                    </div>
                    
                    {resumeData.education.length === 0 ? (
                        <p className="text-gray-400 text-sm">
                            No education added
                        </p>
                    ) : (
                        resumeData.education.map((edu) => (
                            <div key={edu.id} className="mb-4">

                                {/* School */}
                                <p className="font-semibold text-gray-800">
                                    {edu.school || "University of California"}
                                </p>

                                {/* Degree */}
                                <p className="text-gray-700">
                                    {edu.degree || "Bachelor of Science in Computer Science"}
                                </p>

                                {/* Years */}
                                <p className="text-sm text-gray-500">
                                    {edu.startYear || "2016"} - {edu.endYear || "2020"}
                                </p>

                            </div>
                        ))
                    )}
                </div>
    )
}