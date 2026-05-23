// preview/ProjectsPreview.tsx
import { FaCode } from "react-icons/fa";
import type { IResumePreviewProps } from "../../../types/PreviewTypes";

export function ProjectsPreview({
    resumeData,
    accentClass,
}: Readonly<IResumePreviewProps>) {

    

    return (
        <section>

            {/* SECTION TITLE */}
                    <div className={`flex items-center gap-2 mb-3 border-b ${accentClass}`}>
                        <FaCode className={`text-lg mb-1`} />
                        <h3
                            className={`text-xl font-semibold  pb-1 flex-1  `}
                        >
                            Projects
                        </h3>

                    </div>

            {/* PROJECTS */}
            <div className="space-y-6">

                {resumeData.projects.map((project) => (
                    <div key={project.id}>

                        {/* TITLE */}
                        <div className="flex justify-between items-start">

                            <h3 className="font-semibold text-gray-800">
                                {project.title}
                            </h3>

                            <div className="flex gap-3 text-sm">

                                {project.githubLink  && (
                                    <a
                                        href={project.githubLink }
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`underline ${accentClass}`}
                                    >
                                        GitHub
                                    </a>
                                )}


                            </div>

                        </div>

                        {/* DESCRIPTION */}
                        {project.description && (
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {project.description}
                            </p>
                        )}

                    </div>
                ))}

            </div>

        </section>
    
    );
}