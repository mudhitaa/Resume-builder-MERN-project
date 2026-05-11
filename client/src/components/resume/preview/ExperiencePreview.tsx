
import type { IResumePreviewProps } from "../../../types/PreviewTypes"

export const ExperiencePreview = ({resumeData,accentClass}: Readonly<IResumePreviewProps>) => {
    return(
                <div className="mt-6">
                    <h3 className={`text-xl font-semibold mb-2 ${accentClass}`}>Experience</h3>

                    {resumeData.experience.length === 0 ? (
                        <p className="text-gray-400">No experience added</p>
                    ) : (
                        resumeData.experience.map((exp) => (
                            <div key={exp.id} className="mb-3">
                                <p className="font-semibold">
                                    {exp.position || "Frontend Developer"} @ {exp.company || "TechNova Solutions"}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {exp.startDate || "2022-01"} - {exp.endDate || "2024-05"}
                                </p>

                                <p className="text-gray-700 text-sm">
                                    {exp.description || "Developed responsive React applications, improved UI performance by 35%, and collaborated with backend teams to integrate REST APIs."}
                                </p>
                            </div>
                        ))
                    )}
                </div>
    )
}