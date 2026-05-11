
import { Text } from "../../components/typography/Heading";
import { FormInput, FormTextArea } from "../Input";
import { AddButton, RemoveButton } from "../Button";
import type { IProjects } from "../../types/FormTypes";
import type { ChangeEvent} from "react";

export const ProjectsSection = ({
    projects,
    handler,
    addProject,
    removeProject,
}: {
    projects: IProjects[];
    handler: (
        index: number,
        ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    addProject: () => void;
    removeProject: (index: number) => void;
}) => {

  


    return (
        <div className="mb-8">
            <Text className="font-semibold mb-4 text-gray-700">
                Projects
            </Text>

            <div className="space-y-6">

                {projects.map((project, i) => (
                    <div
                        key={project.id}
                        className="border rounded-xl p-4 shadow-sm bg-gray-50"
                    >

                        <div className="flex flex-col gap-4">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <FormInput
                                type="text"
                                name="title"
                                placeholder="Project Title"
                                handler={(e) => handler(i, e)}
                                value={project.title}
                            />
                            <FormInput
                                        type="text"
                                        name="githubLink"
                                        placeholder="GitHub Link"
                                        handler={(e) => handler(i, e)}
                                        value={project.githubLink}
                            />
                        </div>

                            <FormTextArea
                                name="description"
                                placeholder="Project Description"
                                handler={(e) => handler(i, e)}
                                value={project.description}
                            />

                            
                        </div>

                        <div className="flex justify-end mt-4">
                            <RemoveButton
                                type="Project"
                                onClick={() => removeProject(i)}
                            />
                        </div>
                    </div>
                ))}

                <AddButton type="Project" onClick={addProject} />
            </div>
        </div>
    );
};