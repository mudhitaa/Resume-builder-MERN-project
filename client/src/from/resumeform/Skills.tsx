import { useState } from "react";
import { Text } from "../../components/typography/Heading";
import type { IResumeData } from "../../types/FormTypes";

interface ISkillsProps {
    resumeData: IResumeData;
    setResumeData: React.Dispatch<
        React.SetStateAction<IResumeData>
    >;
}

export const Skills = ({
    resumeData,
    setResumeData
}: Readonly<ISkillsProps>) => {

    const [skillInput, setSkillInput] = useState("");

    // ADD SKILL
    const addSkill = () => {

        const trimmedSkill = skillInput.trim();

        if (
            trimmedSkill &&
            !resumeData.skills.includes(trimmedSkill)
        ) {

            setResumeData({
                ...resumeData,
                skills: [
                    ...resumeData.skills,
                    trimmedSkill
                ]
            });

            setSkillInput("");
        }
    };

    // REMOVE SKILL
    const removeSkill = (skill: string) => {

        setResumeData({
            ...resumeData,
            skills: resumeData.skills.filter(
                (s) => s !== skill
            )
        });
    };

    // ENTER KEY
    const handleKeyDown = (
        ev: React.KeyboardEvent<HTMLInputElement>
    ) => {

        if (ev.key === "Enter") {
            ev.preventDefault();
            addSkill();
        }
    };

    return (
        <div className="mb-8">

            <Text className="font-semibold  text-gray-700">
                Skills
            </Text>

            {/* SKILL CHIPS */}
            <div className="flex flex-wrap gap-2 mb-4">

                {resumeData.skills.map((skill) => (

                    <div
                        key={skill}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2"
                    >
                        {skill}

                        <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            className="text-sm hover:text-red-500"
                        >
                            ✕
                        </button>

                    </div>
                ))}

            </div>

            {/* INPUT */}
            <input
                type="text"
                value={skillInput}
                onChange={(e) =>
                    setSkillInput(e.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Type skill and press Enter"
                className="border rounded-lg p-2 w-full focus:outline-blue-800"
            />

        </div>
    );
};