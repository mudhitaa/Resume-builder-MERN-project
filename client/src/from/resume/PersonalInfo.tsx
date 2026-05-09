
import type { IResumeComponentProps} from "../../types/FormTypes";
import { FormInput } from "../Input"
import { Text } from "../../components/typography/Heading"


export const PersonalInfoSection = ({resumeData, handleInputChange}:Readonly<IResumeComponentProps>) => { 

return(
                <div className="mb-8">
                    <Text className="font-semibold mb-4 text-gray-700">
                        Personal Information
                    </Text>

                    <div className="flex flex-col gap-4">

                        <FormInput
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                            handler={handleInputChange}
                            value={resumeData.fullname}
                        />

                        <FormInput
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            handler={handleInputChange}
                            value={resumeData.email}
                        />

                        <FormInput
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            handler={handleInputChange}
                            value={resumeData.phone}
                        />
                        <FormInput
                            type="text"
                            name="address"
                            placeholder="Address"
                            handler={handleInputChange}
                            value={resumeData.address}
                        />

                    </div>
                </div>
                )
}