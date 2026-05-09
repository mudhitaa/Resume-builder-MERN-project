import { type IResumeData } from "../../../types/FormTypes"

export const EducationPreview = ({resumeData}: {resumeData: IResumeData}) => {
    return(
            <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3 border-b pb-1">
                        Education
                    </h3>

                    {resumeData.education.length === 0 ? (
                        <p className="text-gray-400 text-sm">
                            No education added
                        </p>
                    ) : (
                        resumeData.education.map((edu, i) => (
                            <div key={i} className="mb-4">

                                {/* School */}
                                <p className="font-semibold text-gray-800">
                                    {edu.school || "School / University"}
                                </p>

                                {/* Degree */}
                                <p className="text-gray-700">
                                    {edu.degree || "Degree"}
                                </p>

                                {/* Years */}
                                <p className="text-sm text-gray-500">
                                    {edu.startYear || "Start"} - {edu.endYear || "End"}
                                </p>

                            </div>
                        ))
                    )}
                </div>
    )
}