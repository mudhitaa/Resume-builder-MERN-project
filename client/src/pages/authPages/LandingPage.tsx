
import { Heading1, Heading2, Text } from "../../components/typography/Heading";
import { AuthLayout } from "../layouts/AuthLayout";
import { RedirectLink } from "../../ui/Links";

export default function LandingPage() {
  return (
    <>
    <AuthLayout linkurl="/login" linktext="Login">  
      <Heading1 pagetitle="Welcome to Resume Builder!" />
      <Heading2 maintext="Create your professional resume in minutes." subtext="text-blue-800" />
      <Text className="text-gray-700 mt-4" >
        <p>Join thousands of users who have crafted their perfect resumes with our easy-to-use platform.
           Whether you're a student, a professional, or someone looking to switch careers, our resume builder has got you covered.</p>
      </Text>
      <RedirectLink url="/register" txt="Get Started Today" className=" md:block mt-5 rounded-md bg-blue-900 px-5 py-2 text-md font-medium text-white transition hover:bg-blue-800 w-1/3" />
    </AuthLayout>

    </>
  );
}