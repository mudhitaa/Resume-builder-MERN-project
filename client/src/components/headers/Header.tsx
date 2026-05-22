import { useNavigate } from "react-router";
import { Heading1 } from "../typography/Heading";
import { useAuth } from "../../hooks/useAuth";

import logo from "../../assets/images/logo.jpg";

export default function Header() {

    const navigate = useNavigate();
    const { logoutUser } = useAuth();

    const handleLogout = () => {
        logoutUser();
        navigate("/login", { replace: true });
    };
    return (
        <header className="bg-white">

            <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-2">

                    <img
                        src={logo}
                        alt="EasyResume Logo"
                        className="h-14 w-14 rounded-full object-cover"
                    />

                    <Heading1
                            pagetitle="EasyResume"
                            className="text-blue-900"
                    />

                </div>

                {/* RIGHT SIDE */}
                <div className="ml-auto flex items-center gap-4">

                    <button
                        onClick={handleLogout}
                        className="rounded-md bg-blue-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800 cursor-pointer"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </header>
    );
}