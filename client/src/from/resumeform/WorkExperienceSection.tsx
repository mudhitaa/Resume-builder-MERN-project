import { AddButton, RemoveButton } from "../Button";
import { FormInput, FormTextArea } from "../Input";
import { type IWorkExperienceSectionProps } from "../../types/FormTypes";
import { Text } from "../../components/typography/Heading";


export default function WorkExperienceSection({
    experience,
    handler,
    addExperience,
    removeExperience
}: Readonly<IWorkExperienceSectionProps>) {

    return (
        <div className="mb-8">
                    <Text className="font-semibold mb-4 text-gray-700">
                        Experience
                    </Text>
        
            <div className="space-y-6">

                {experience.map((exp, index) => (

                    <div
                        key={index}
                        className="border rounded-xl p-4 shadow-sm bg-gray-50"
                    >

                        {/* HEADER */}
                        <div className="flex justify-between items-center mb-4">

                            <h3 className="font-semibold text-gray-700">
                                #{index + 1}
                            </h3>

                            {experience.length > 0 && (
                                <RemoveButton
                                    type="Experience"
                                    onClick={() => removeExperience(index)}
                                />
                            )}

                        </div>

                        {/* FORM */}
                        <div className="flex flex-col gap-4">

                            <FormInput
                                type="text"
                                name="company"
                                placeholder="Company Name"
                                handler={(ev) =>
                                    handler(index, ev)
                                }
                                value={exp.company}
                            />

                            <FormInput
                                type="text"
                                name="position"
                                placeholder="Position / Role"
                                handler={(ev) =>
                                    handler(index, ev)
                                }
                                value={exp.position}
                            />

                            <div className="grid grid-cols-2 gap-4">

                                <FormInput
                                    type="date"
                                    name="startDate"
                                    placeholder=""
                                    handler={(ev) =>
                                        handler(index, ev)
                                    }
                                    value={exp.startDate}
                                />

                                <FormInput
                                    type="date"
                                    name="endDate"
                                    placeholder=""
                                    handler={(ev) =>
                                        handler(index, ev)
                                    }
                                    value={exp.endDate}
                                />

                            </div>

                            <FormTextArea
                                name="description"
                                placeholder="Describe your responsibilities and achievements..."
                                handler={(ev) =>
                                    handler(index, ev)
                                }
                                value={exp.description}
                            />

                            

                        </div>

                    </div>

                ))}

                {/* ADD BUTTON */}
                <AddButton type="Experience" onClick={addExperience} />

            </div>
        </div>
    );
}