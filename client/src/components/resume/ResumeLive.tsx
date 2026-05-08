import { type IResumeData } from "../../types/FormTypes";

export default function ResumeLive({ resumeData }: { resumeData: IResumeData }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6">

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

                {/* SUMMARY */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">
                        Summary
                    </h3>
                    <p className="text-gray-700">
                        {resumeData.summary || "Write your summary..."}
                    </p>
                </div>

                {/* EDUCATION */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">
                        Education
                    </h3>

                    {resumeData.education.map((edu, i) => (
                        <p key={i} className="text-gray-700">
                            {edu.degree} - {edu.school}
                        </p>
                    ))}
                </div>

                {/* SKILLS */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">
                        Skills
                    </h3>
                    <p className="text-gray-700">
                        {resumeData.skills}
                    </p>
                </div>

            </div>
        </div>
    );
}