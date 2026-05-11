
import type { IResumePreviewProps } from "../../../types/PreviewTypes";

export function CertificationPreview({
    resumeData,
    accentClass,
}: Readonly<IResumePreviewProps>) {

    if (
        !resumeData.certifications ||
        resumeData.certifications.length === 0
    ) {
        return null;
    }

    return (
        <section>

            {/* SECTION TITLE */}
            <h2
                className={`text-lg font-bold border-b pb-1 mb-4 ${accentClass}`}
            >
                Certifications
            </h2>

            {/* CERTIFICATIONS */}
            <div className="space-y-4">

                {resumeData.certifications.map((cert) => (
                    <div key={cert.id}>

                        {/* TITLE + DATE */}
                        <div className="flex justify-between items-start gap-4">

                            <h3 className="font-semibold text-gray-800">
                                {cert.name }
                            </h3>

                            {cert.date && (
                                <span className="text-sm text-gray-500 whitespace-nowrap">
                                    {cert.date }
                                </span>
                            )}

                        </div>

                        {/* ISSUER */}
                        {cert.issuer && (
                            <p className="text-sm text-gray-600 mt-1">
                                {cert.issuer}
                            </p>
                        )}

                        {/* DESCRIPTION */}
                        {cert.description && (
                            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                                {cert.description }
                            </p>
                        )}

                        {/* CREDENTIAL ID */}
                        {cert.credentialId && (
                            <p className="text-xs text-gray-500 mt-2">
                                Credential ID: {cert.credentialId }
                            </p>
                        )}

                        {/* URL */}
                        {cert.credentialUrl && (
                            <a
                                href={cert.credentialUrl }
                                target="_blank"
                                rel="noreferrer"
                                className={`text-sm underline mt-1 inline-block ${accentClass}`}
                            >
                                View Credential
                            </a>
                        )}

                    </div>
                ))}

            </div>

        </section>
    );
}