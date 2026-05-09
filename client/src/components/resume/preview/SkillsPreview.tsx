import type { IResumeData } from "../../../types/FormTypes"

export const SkillsPreview = ({resumeData}: {resumeData: IResumeData}) => {
    return(
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">
                        Skills
                    </h3>
                    <p className="text-gray-700">
                        {resumeData.skills || "List your skills."}
                    </p>
                </div>
    )
}