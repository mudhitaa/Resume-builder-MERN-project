import { Text } from "../../components/typography/Heading";
import { FormInput } from "../Input";
import { AddButton, RemoveButton } from "../Button";
import type { ICertifications } from "../../types/FormTypes";
import type { ChangeEvent } from "react";

export interface ICertificationSectionProps {
    certification: ICertifications[];
    handler: (
        index: number,
        ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    addCertification: () => void;
    removeCertification: (index: number) => void;
}

export const CertificationSection = ({
    certification,
    handler,
    addCertification,
    removeCertification,
}: Readonly<ICertificationSectionProps>) => {
    return (
        <div className="mb-8">
            <Text className="font-semibold mb-4 text-gray-700">
                Certifications
            </Text>

            <div className="space-y-6">
                {
                    certification.map((cert, i) => (
                        <div
                            key={cert.id}
                            className="border rounded-xl p-4 shadow-sm bg-gray-50"
                        >
                            

                            {/* FORM */}
                            <div className="flex flex-col gap-4">
                                <FormInput
                                    type="text"
                                    name="name"
                                    placeholder="Certification Title"
                                    handler={(e) => handler(i, e)}
                                    value={cert.name}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <FormInput
                                        type="text"
                                        name="issuer"
                                        placeholder="Issuing Organization"
                                        handler={(e) => handler(i, e)}
                                        value={cert.issuer}
                                    />

                                    <FormInput
                                        type="text"
                                        name="date"
                                        placeholder="Year (e.g. 2026)"
                                        handler={(e) => handler(i, e)}
                                        value={cert.date}
                                    />
                                </div>

                                <FormInput
                                    type="text"
                                    name="credentialId"
                                    placeholder="Credential ID (optional)"
                                    handler={(e) => handler(i, e)}
                                    value={cert.credentialId}
                                />

                            </div>
                            <div className="flex justify-end mt-4">

                                <RemoveButton
                                    type="Certification"
                                    onClick={() => removeCertification(i)}
                                />
                            </div>
                        </div>
                    ))
                }

                {/* ADD BUTTON */}
                <AddButton type="Certification" onClick={addCertification} />
            </div>
        </div>
    );
};