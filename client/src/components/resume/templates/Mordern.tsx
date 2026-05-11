import type { IResumeData } from "../../../types/FormTypes";

export default function ModernTemplate({
    resumeData
}: {
    resumeData: IResumeData;
}) {

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">

            {/* HEADER */}
            <div className="border-b pb-5 mb-5">

                <h1 className="text-4xl font-bold text-gray-900">
                    {resumeData.fullname || "Your Name"}
                </h1>

                <p className="text-gray-500 mt-2">
                    {resumeData.email}
                </p>

                <p className="text-gray-500">
                    {resumeData.phone}
                </p>

            </div>

            {/* SUMMARY */}
            <section className="mb-6">

                <h2 className="text-xl font-semibold mb-2 text-blue-600">
                    Summary
                </h2>

                <p className="text-gray-700">
                    {resumeData.summary}
                </p>

            </section>

        </div>
    );
}