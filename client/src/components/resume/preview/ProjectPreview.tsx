// preview/ProjectsPreview.tsx

import type { IResumePreviewProps } from "../../../types/PreviewTypes";

export function ProjectsPreview({
    resumeData,
    accentClass,
}: Readonly<IResumePreviewProps>) {

    

    return (
        <section>

            {/* SECTION TITLE */}
            <h2
                className={`text-lg font-bold border-b pb-1 mb-4 ${accentClass}`}
            >
                Projects
            </h2>

            {/* PROJECTS */}
            <div className="space-y-6">

                {resumeData.projects.map((project) => (
                    <div key={project.id}>

                        {/* TITLE */}
                        <div className="flex justify-between items-start gap-4">

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
                            <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                                {project.description}
                            </p>
                        )}

                    </div>
                ))}

            </div>

        </section>
    );
}