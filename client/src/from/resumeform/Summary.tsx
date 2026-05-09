import { Text } from "../../components/typography/Heading"
import type { IResumeComponentProps } from "../../types/FormTypes"
import { FormTextArea } from "../Input"

export const SummarySection = ({resumeData, handleInputChange}:Readonly<IResumeComponentProps>) => {
    return(
        
          <div className="mb-8">
             <Text className="font-semibold mb-4 text-gray-700">
                    Profile Summary
             </Text>
             <FormTextArea
                    name="summary"
                    placeholder="Write a short professional summary..."
                    handler={handleInputChange}
                    value={resumeData.summary}
              />
          </div>
        
    )
}