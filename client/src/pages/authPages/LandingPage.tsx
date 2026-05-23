import { Heading1, Heading2, Text } from "../../components/typography/Heading";
import { AuthLayout } from "../layouts/AuthLayout";
import { RedirectLink } from "../../ui/Links";
import { LandingCard } from "../../components/auth/LandingCard";

export default function LandingPage() {
  return (
    <AuthLayout linkurl="/login" linktext="Login">
      
      <div className="w-full max-w-6xl mx-auto py-10 md:py-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            
            <div className="space-y-2">
              <Heading1 pagetitle="Build a Resume That Gets You Hired" />
              <Heading2
                maintext="Create professional resumes in minutes"
                subtext="text-blue-600"
              />
            </div>

            <Text className="text-gray-600 text-justify leading-relaxed max-w-md mx-auto md:mx-0">
              <p>
                Join thousands of users building modern, ATS-friendly resumes
                with ease. Whether you're starting your career or switching
                paths, we help you stand out with clean, professional design.
              </p>
            </Text>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
              <RedirectLink
                url="/register"
                txt="Get Started"
                className="w-full sm:w-auto rounded-lg bg-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-800 transition shadow-md"
              />
            </div>
          </div>

          {/* RIGHT */}
            <LandingCard/>

        </div>
      </div>
    </AuthLayout>
  );
}