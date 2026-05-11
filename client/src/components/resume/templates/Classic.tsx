import type { IResumeData } from "../../../types/FormTypes";

export default function ClassicTemplate({
    resumeData
}: {
    resumeData: IResumeData;
}) {

    return (
        <div className="bg-white border p-10">

            {/* CENTERED HEADER */}
            <div className="text-center mb-8">

                <h1 className="text-3xl font-serif font-bold">
                    {resumeData.fullname || "Your Name"}
                </h1>

                <p className="text-gray-600 mt-2">
                    {resumeData.email}
                </p>

                <p className="text-gray-600">
                    {resumeData.phone}
                </p>

            </div>

            {/* SUMMARY */}
            <section className="mb-6">

                <h2 className="uppercase tracking-wide border-b pb-2 font-bold">
                    Professional Summary
                </h2>

                <p className="mt-3 text-gray-700">
                    {resumeData.summary}
                </p>

            </section>

        </div>
    );
}