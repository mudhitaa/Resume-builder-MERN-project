// EducationSection.tsx

import type { BaseSyntheticEvent } from "react";
import { FormInput } from "./Input";

interface IEducation {
    school: string;
    degree: string;
    startYear: string;
    endYear: string;
}

interface IEducationSectionProps {
    education: IEducation[];

    handleEducationChange: (
        index: number,
        ev: BaseSyntheticEvent
        ) => void;

    addEducation: () => void;

    removeEducation: (index: number) => void;
}

export default function EducationSection({
    education,
    handleEducationChange,
    addEducation,
    removeEducation
}: Readonly<IEducationSectionProps>) {

    return (
        <>
            <div className="space-y-6">

                {education.map((edu, index) => (

                    <div
                        key={index}
                        className="border rounded-xl p-4 shadow-sm bg-gray-50"
                    >

                        <div className="flex justify-between items-center mb-4">

                            <h3 className="font-semibold text-gray-700">
                                Education #{index + 1}
                            </h3>

                            {education.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeEducation(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            )}

                        </div>

                        <div className="flex flex-col gap-4">

                            <FormInput
                                type="text"
                                name="school"
                                placeholder="School / University"
                                handler={(ev) =>
                                    handleEducationChange(index, ev)
                                }
                            />

                            <FormInput
                                type="text"
                                name="degree"
                                placeholder="Degree"
                                handler={(ev) =>
                                    handleEducationChange(index, ev)
                                }
                            />

                            <div className="grid grid-cols-2 gap-4">

                                <FormInput
                                    type="text"
                                    name="startYear"
                                    placeholder="Start Year"
                                    handler={(ev) =>
                                        handleEducationChange(index, ev)
                                    }
                                />

                                <FormInput
                                    type="text"
                                    name="endYear"
                                    placeholder="End Year"
                                    handler={(ev) =>
                                        handleEducationChange(index, ev)
                                    }
                                />

                            </div>

                        </div>

                    </div>
                ))}

                <button
                    type="button"
                    onClick={addEducation}
                    className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition"
                >
                    + Add Education
                </button>

            </div>
        </>
    );
}