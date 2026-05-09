import { type ChangeEvent } from "react";
import { FormTextArea } from "../../from/Input";
import { Text } from "../../components/typography/Heading";

export const Skills = ({handleInputChange, resumeData}: {handleInputChange: (ev: ChangeEvent<HTMLTextAreaElement>) => void; resumeData: any}) => {
    return (
                        <div className="mb-8">
                            <Text className="font-semibold mb-4 text-gray-700">
                                Skills
                            </Text>
        
                            <FormTextArea
                                name="skills"
                                placeholder="Enter your skills"
                                handler={handleInputChange}
                                value={resumeData.skills}
                            />
                        </div>
        )}