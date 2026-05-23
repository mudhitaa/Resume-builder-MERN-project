import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaPhone,
    FaLocationDot,
} from "react-icons/fa6";

import type { IResumePreviewProps } from "../../../types/PreviewTypes";

export default function PersonalPreview({
    resumeData,
    accentClass,
}: Readonly<IResumePreviewProps>) {

    return (
        <> 
            {/* NAME */}
            <h1 className={`text-3xl font-bold ${accentClass}`}>
                {resumeData.fullname || "Alexander Baker"}
            </h1>

            {/* CONTACT INFO */}
            <div className="flex justify-between items-start mt-5 gap-8">

                {/* LEFT */}
                <div className="space-y-3 text-left">

                    {/* EMAIL */}
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-gray-500 text-sm" />

                        <p className="text-gray-600">
                            {resumeData.email || "alexander.baker@gmail.com"}
                        </p>
                    </div>

                    {/* LINKEDIN */}
                    <div className="flex items-center gap-2">
                        <FaLinkedin className="text-gray-500 text-sm" />
                   
                        <a href={resumeData.linkedin} className="text-gray-600">
                            {resumeData.linkedin || "linkedin.com/in/alexbaker"}
                        </a>
                    </div>

                    {/* GITHUB */}
                    {resumeData.github && (
                        <div className="flex items-center gap-2">
                            <FaGithub className="text-gray-500 text-sm" />
                            <a href={resumeData.github} className="text-gray-600">
                            {resumeData.github}
                            </a>
                        </div>
                    )}

                </div>

                {/* RIGHT */}
                <div className="space-y-3 text-right">

                    {/* PHONE */}
                    <div className="flex items-center justify-end gap-2">
                        <FaPhone className="text-gray-500 text-sm" />

                        <p className="text-gray-600">
                            {resumeData.phone || "+1 (555) 123-4567"}
                        </p>
                    </div>

                    {/* ADDRESS */}
                    <div className="flex items-center justify-end gap-2">
                        <FaLocationDot className="text-gray-500 text-sm" />

                        <p className="text-gray-600">
                            {resumeData.address || "Los Angeles, California, USA"}
                        </p>
                    </div>

                </div>

            </div>

        </>
    );
}