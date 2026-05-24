import ATSPreview from "../../components/auth/BeforeAfter";
import RegisterForm from "../../components/auth/RegisterForm";
import { Heading1 } from "../../components/typography/Heading";
import { AuthLayout } from "../layouts/AuthLayout";

export default function RegisterPage() {
  return (
    <AuthLayout linkurl="/login" linktext="Login">

      <div className="w-full flex justify-center">

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT  */}
          <ATSPreview />

          {/* RIGHT */}
          <div className="w-full flex justify-center md:justify-end">

            <div className="relative w-full max-w-md group">
             
              <div className="absolute inset-0 bg-linear-to-br from-purple-400 to-blue-500 blur-3xl opacity-20 rounded-full group-hover:opacity-30 transition"></div>
              {/* card */}
              <div className="relative bg-white/75 backdrop-blur-2xl border border-white/30 shadow-xl rounded-2xl p-6 md:p-8 group-hover:shadow-2xl transition">
                {/* header */}
                <div className="text-center mb-6 space-y-1">

                  <Heading1 pagetitle="Create Account" className="text-center" />

                  <p className="text-sm text-gray-500">
                    Start building your professional resume.
                  </p>

                </div>

                <RegisterForm />

              </div>

            </div>

          </div>

        </div>
      </div>

    </AuthLayout>
  );
}