import { Text } from "../../components/typography/Heading";
import type { ChangeEvent } from "react";
import { FormLable, FormSelect } from "../Input";
import type { IResumeData } from "../../types/FormTypes";

export interface ICustomizationSectionProps {
    resumeData: IResumeData;

    handleSelectChange: (
        ev: ChangeEvent<HTMLSelectElement>
    ) => void;
}

const templateOptions = [
    { label: "Modern Template", value: "modern" },
    { label: "Classic Template", value: "classic" },
    { label: "Minimal Template", value: "minimal" }
];

const fontOptions = [
  { label: "Inter (Default)", value: "inter" },
  { label: "Poppins", value: "poppins" },
  { label: "Roboto", value: "roboto" },
  { label: "Playfair Display", value: "playfair" }
];

const accentColors = [
  { label: "Black (Default)", value: "black" },
  { label: "Blue", value: "blue" },
  { label: "Slate", value: "slate" },
  { label: "Emerald", value: "emerald" },
  { label: "Amber", value: "amber" },
  { label: "Rose", value: "rose" }
];

export const Customization = ({
    resumeData,
    handleSelectChange
}: Readonly<ICustomizationSectionProps>) => {

    return (
        <div className="mb-8">

            <Text className="font-semibold mb-4 text-gray-700">
                Resume Customization
            </Text>

            <div className="flex flex-col gap-4">

                <div>
                    <FormLable htmlFor="template">
                        Template:
                    </FormLable>

                    <FormSelect
                        name="template"
                        options={templateOptions}
                        handler={handleSelectChange}
                        value={resumeData.template}
                    />
                </div>

         
                <div>
                    <FormLable htmlFor="font">
                        Font:
                    </FormLable>

                    <FormSelect
                        name="font"
                        options={fontOptions}
                        handler={handleSelectChange}
                        value={resumeData.font}
                    />
                </div>

                
                <div>
                    <FormLable htmlFor="accentColor">
                        Accent Color:
                    </FormLable>

                    <FormSelect
                        name="accentColor"
                        options={accentColors}
                        handler={handleSelectChange}
                        value={resumeData.accentColor}
                    />
                </div>

            </div>

        </div>
    );
};