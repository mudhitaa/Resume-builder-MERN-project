
import RegisterForm from "../../components/auth/RegisterForm";
import { Heading1 } from "../../components/typography/Heading";
import { AuthLayout } from "../layouts/AuthLayout";

export default function RegisterPage() {
  return (
    <>
    <AuthLayout linkurl="/login" linktext="Login">  
      <Heading1 pagetitle="Register" className="text-center"/>
      <RegisterForm />
    </AuthLayout>
    </>
  );
}