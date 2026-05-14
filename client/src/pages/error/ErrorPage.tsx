import { AlertTriangle } from "lucide-react";
import { RedirectLink } from "../../ui/Links";

interface IErrorPageProps {
    code?: string;
    message?: string;
}

export default function ErrorPage({
    code = "404",
    message = "The page you are looking for could not be found.",
}: Readonly<IErrorPageProps>) {

    return (
        <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-blue-50 via-white to-yellow-50 flex items-center justify-center px-6">

             <div className="absolute -top-30 -left-30 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl" />

            <div className="absolute -bottom-25 -right-25 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl" />

            
            <div
                className="
                    relative
                    z-10
                    w-full
                    max-w-lg
                    rounded-3xl
                    border
                    border-white/60
                    bg-white/80
                    backdrop-blur-xl
                    shadow-2xl
                    shadow-blue-100/50
                    p-10
                    text-center
                "
            >

                
                <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-300/40">

                    <AlertTriangle className="text-white w-10 h-10" />

                </div>

              
                <h1 className="mt-8 text-7xl font-black tracking-tight bg-linear-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                    {code}
                </h1>

                
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                    {message}
                </p>

                <div className="mt-8 flex justify-center">

                    <RedirectLink
                        url="/"
                        txt="Return Home"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            rounded-xl
                            bg-blue-600
                            px-6
                            py-3
                            font-medium
                            text-white
                            shadow-lg
                            shadow-blue-200/50
                            transition-all
                            duration-300
                            hover:bg-blue-700
                            hover:scale-[0.98]
                        "
                    />

                </div>

                <p className="mt-6 text-sm text-gray-400">
                    Resume Builder • Professional Templates • PDF Export
                </p>

            </div>

        </div>
    );
}