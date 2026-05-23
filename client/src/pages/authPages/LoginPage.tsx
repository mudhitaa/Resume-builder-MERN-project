
import {  LoginPreviewCard } from "../../components/auth/LandingCard";
import LoginForm from "../../components/auth/LoginForm";
import { Heading1 } from "../../components/typography/Heading";
import { AuthLayout } from "../layouts/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout linkurl="/register" linktext="Sign Up">

      <div className="w-full flex justify-center">

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}

          <LoginPreviewCard/>

          {/* RIGHT */}
          <div className="w-full flex justify-center md:justify-end">
            <div className="relative w-full max-w-md group">
              
              <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-purple-500 blur-3xl opacity-20 rounded-full group-hover:opacity-30 transition"></div>
              {/* login card */}
              <div className="relative bg-white/75 backdrop-blur-2xl border border-white/30 shadow-xl rounded-2xl p-6 md:p-8  group-hover:shadow-2xl">
                {/* header */}
                <div className="text-center mb-6">
                  <Heading1 pagetitle="Welcome Back" className="text-center" />
                  <p className="text-sm text-gray-500 mt-1">
                    Sign in to continue building your resume
                  </p>
                </div>
                <LoginForm />
              </div>
            </div>
          </div>

        </div>
      </div>

    </AuthLayout>
  );
}