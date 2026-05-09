import type { IResumeData } from "../../../types/FormTypes"

export const SummaryPreview = ({resumeData}: {resumeData: IResumeData}) => {
    return (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">
                        Summary
                    </h3>
                    <p className="text-gray-700">
                        {resumeData.summary || "Write your summary."}
                    </p>
                </div>
    )
}
