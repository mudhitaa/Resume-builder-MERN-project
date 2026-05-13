import type { IResumePreviewProps } from "../../../types/PreviewTypes";
import { TbTools } from "react-icons/tb";
export const SkillsPreview = ({resumeData,accentClass}: Readonly<IResumePreviewProps>) => {

    return (
        <div className="mt-6">

                    <div className={`flex items-center gap-2 mb-3 border-b ${accentClass}`}>
                        <TbTools className={`text-lg mb-1`} />
                        <h3
                            className={`text-xl font-semibold  pb-1 flex-1  `}
                        >
                            Skills
                        </h3>

                    </div>

            {resumeData.skills.length === 0 ? (

                <p className="text-gray-400">
                    No skills added
                </p>

            ) : (

                <div className="flex flex-wrap gap-2">

                    {resumeData.skills.map((skill) => (

                        <span
                            key={skill}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                            {skill}
                        </span>

                    ))}

                </div>
            )}

        </div>
    );
};