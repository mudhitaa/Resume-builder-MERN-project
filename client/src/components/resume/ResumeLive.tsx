export default function ResumeLive() {
    return (
        <>
            {/* RIGHT SIDE - RESUME PREVIEW */}
                    <div className="bg-white rounded-2xl shadow-md p-6">

                        <h2 className="text-2xl font-semibold mb-6">
                            Live Resume Preview
                        </h2>

                        <div className="border border-dashed border-gray-300 rounded-xl min-h-[700px] p-6">

                            <h1 className="text-3xl font-bold text-gray-800">
                                Your Name
                            </h1>

                            <p className="text-gray-500 mt-2">
                                your.email@example.com
                            </p>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold mb-2">
                                    Education
                                </h3>

                                <p className="text-gray-700">
                                    Bachelor in Computer Science
                                </p>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold mb-2">
                                    Skills
                                </h3>

                                <p className="text-gray-700">
                                    React, Node.js, MongoDB
                                </p>
                            </div>

                        </div>

                    </div>
        </>
    );
}