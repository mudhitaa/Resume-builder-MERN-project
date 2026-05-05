
import { FirstHeader } from "../components/headers/FirstHeader";
import { Heading1, Heading2 } from "../components/typography/Heading";
import { AuthLayout } from "../layouts/AuthLayout";

export default function LandingPage() {
  return (
    <>
    <FirstHeader />
    <AuthLayout>  
      <Heading1 pagetitle="Welcome to Resume Builder!" />
      <Heading2 maintext="Create your professional resume in minutes." subtext="text-blue-800" />
    </AuthLayout>
    </>
  );
}