// EducationSection.tsx
import { Text } from "../../components/typography/Heading";
import { FormInput } from "../Input";
import { AddButton, RemoveButton } from "../Button";
import type { ChangeEvent } from "react";
import type { IEducation } from "../../types/FormTypes";

export interface IEducationSectionProps {
    education: IEducation[];

    handler: (
        index: number,
        ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => void;

    addEducation: () => void;

    removeEducation: (index: number) => void;
}


export default function EducationSection({
    education,
    handler,
    addEducation,
    removeEducation
}: Readonly<IEducationSectionProps>) {

    return (
        <div className="mb-8">
                    <Text className="font-semibold mb-4 text-gray-700">
                        Education
                    </Text>
            <div className="space-y-6">

                {education.map((edu, index) => (

                    <div
                        key={index}
                        className="border rounded-xl p-4 shadow-sm bg-gray-50"
                    >

                        <div className="flex flex-col gap-4">

                            <FormInput
                                type="text"
                                name="school"
                                placeholder="School / University"
                                handler={(ev) =>
                                    handler(index, ev)
                                }
                                value={edu.school}
                            />

                            <FormInput
                                type="text"
                                name="degree"
                                placeholder="Degree"
                                handler={(ev) =>
                                    handler(index, ev)
                                }
                                value={edu.degree}
                            />

                            <div className="grid grid-cols-2 gap-4">

                                <FormInput
                                    type="text"
                                    name="startYear"
                                    placeholder="Start Year"
                                    handler={(ev) =>
                                        handler(index, ev)
                                    }
                                    value={edu.startYear}
                                />

                                <FormInput
                                    type="text"
                                    name="endYear"
                                    placeholder="End Year"
                                    handler={(ev) =>
                                        handler(index, ev)
                                    }
                                    value={edu.endYear} 
                                />

                            </div>

                        </div>
                        <div className="flex justify-end mt-4">
                                <RemoveButton
                                    onClick={() => removeEducation(index)}
                                />
                        </div>

                    </div>
                ))}

                <AddButton type="Education" onClick={addEducation} />

            </div>
        </div>
    );
}