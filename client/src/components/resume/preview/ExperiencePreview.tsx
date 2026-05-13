
import type { IResumePreviewProps } from "../../../types/PreviewTypes"
import { BsFillBriefcaseFill } from "react-icons/bs";

export const ExperiencePreview = ({resumeData,accentClass}: Readonly<IResumePreviewProps>) => {
    if (
        !resumeData.experience ||
        resumeData.experience.length === 0
    ) {
        return null;
    }
    return(
                <div className="mt-6">
                       <div className={`flex items-center gap-2 mb-3 border-b ${accentClass}`}>
                           <BsFillBriefcaseFill className={`text-md mb-1`} />
                           <h3
                               className={`text-xl font-semibold  pb-1 flex-1  `}
                           >
                               Experience
                           </h3>
   
                       </div>                 

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