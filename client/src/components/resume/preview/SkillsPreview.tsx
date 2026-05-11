import type { IResumePreviewProps } from "../../../types/PreviewTypes";

export const SkillsPreview = ({resumeData,accentClass}: Readonly<IResumePreviewProps>) => {

    return (
        <div className="mt-6">

            <h3 className={`text-xl font-semibold mb-2 ${accentClass}`}>
                Skills
            </h3>

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