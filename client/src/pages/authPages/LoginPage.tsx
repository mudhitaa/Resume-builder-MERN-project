

import LoginForm from "../../components/auth/LoginForm";
import { Heading1 } from "../../components/typography/Heading";
import { AuthLayout } from "../layouts/AuthLayout";

export default function LoginPage() {
  return (
    <>
    <AuthLayout linkurl="/register" linktext="Sign Up">  
      <Heading1 pagetitle="Login Form" className="text-center "/>
      <LoginForm />
    </AuthLayout>
    </>
  );
}