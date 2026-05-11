import {type IResumePreviewProps } from "../../../types/PreviewTypes"

export const EducationPreview = ({resumeData,accentClass}: Readonly<IResumePreviewProps>) => {
    return(
            <div className="mt-6">
                    <h3 className={`text-xl font-semibold mb-3 border-b pb-1 ${accentClass}`}>
                        Education
                    </h3>

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
                                    {edu.startYear || "2016-08-10"} - {edu.endYear || "2020-05-10"}
                                </p>

                            </div>
                        ))
                    )}
                </div>
    )
}