import { type IResumeData } from "../../types/FormTypes";

export default function ResumeLive({ resumeData,className }: { resumeData: IResumeData; className?: string }) {
    return (
        <div className={`bg-white rounded-2xl shadow-md p-6 ${className || ""}`}>

            <h2 className="text-2xl font-semibold mb-6">
                Live Resume Preview
            </h2>

            <div className="border border-dashed border-gray-300 rounded-xl p-6">

                {/* NAME */}
                <h1 className="text-3xl font-bold text-gray-800">
                    {resumeData.fullname || "Your Name"}
                </h1>

                <p className="text-gray-500 mt-2">
                    {resumeData.email || "your.email@example.com"}
                </p>

                <p className="text-gray-500">
                    {resumeData.phone}
                </p>
                
                <p className="text-gray-500">
                    {resumeData.address}
                </p>

                {/* SUMMARY */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">
                        Summary
                    </h3>
                    <p className="text-gray-700">
                        {resumeData.summary || "Write your summary."}
                    </p>
                </div>
                {/* EXPERIENCE */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Experience</h3>

                    {resumeData.experience.length === 0 ? (
                        <p className="text-gray-400">No experience added</p>
                    ) : (
                        resumeData.experience.map((exp, i) => (
                            <div key={i} className="mb-3">
                                <p className="font-semibold">
                                    {exp.position} @ {exp.company}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {exp.startDate} - {exp.endDate}
                                </p>

                                <p className="text-gray-700 text-sm">
                                    {exp.description}
                                </p>
                            </div>
                        ))
                    )}
                </div>

                {/* EDUCATION */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3 border-b pb-1">
                        Education
                    </h3>

                    {resumeData.education.length === 0 ? (
                        <p className="text-gray-400 text-sm">
                            No education added
                        </p>
                    ) : (
                        resumeData.education.map((edu, i) => (
                            <div key={i} className="mb-4">

                                {/* School */}
                                <p className="font-semibold text-gray-800">
                                    {edu.school || "School / University"}
                                </p>

                                {/* Degree */}
                                <p className="text-gray-700">
                                    {edu.degree || "Degree"}
                                </p>

                                {/* Years */}
                                <p className="text-sm text-gray-500">
                                    {edu.startYear || "Start"} - {edu.endYear || "End"}
                                </p>

                            </div>
                        ))
                    )}
                </div>

                {/* SKILLS */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">
                        Skills
                    </h3>
                    <p className="text-gray-700">
                        {resumeData.skills || "List your skills."}
                    </p>
                </div>

            </div>
        </div>
    );
}