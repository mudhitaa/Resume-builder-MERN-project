import ResumeForm from "../../components/resume/ResumeForm";
import ResumeLive from "../../components/resume/ResumeLive";
import bgImage from "../../assets/images/landingbg.jpg";

export const ResumeLayout = () => {
    return (
        <>
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
         >
            <div className="min-h-screen bg-gray-100 rounded-2xl shadow-md p-5 w-full max-w-7xl mx-auto">
                
                {/* PAGE TITLE */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Resume Builder
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Fill in your details and build your professional resume.
                    </p>
                </div>

                {/* MAIN LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <ResumeForm />

                    <ResumeLive />

                    

                </div>

            </div>
            </div>
        </>
    );
};