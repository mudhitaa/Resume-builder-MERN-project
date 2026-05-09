import type { IResumeData } from "../../../types/FormTypes"

export const ExperiencePreview = ({resumeData}: {resumeData: IResumeData}) => {
    return(
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Experience</h3>

                    {resumeData.experience.length === 0 ? (
                        <p className="text-gray-400">No experience added</p>
                    ) : (
                        resumeData.experience.map((exp, i) => (
                            <div key={i} className="mb-3">
                                <p className="font-semibold">
                                    {exp.position} @ {exp.company}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {exp.startDate} - {exp.endDate}
                                </p>

                                <p className="text-gray-700 text-sm">
                                    {exp.description}
                                </p>
                            </div>
                        ))
                    )}
                </div>
    )
}