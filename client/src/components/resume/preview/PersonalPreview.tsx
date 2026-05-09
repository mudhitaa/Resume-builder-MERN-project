import type { IResumeData } from "../../../types/FormTypes";

export default function PersonalPreview({
    resumeData
}: {
    resumeData: IResumeData;
}) {
    return (
        <>
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
        </>
    );
}