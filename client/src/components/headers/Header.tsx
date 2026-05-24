import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react"
import { LogoLeft } from "./LogoComponent";

export default function Header() {

    const navigate = useNavigate();
    const { logoutUser, loggedInUser } = useAuth();
    const handleLogout = () => {
        logoutUser();
        navigate("/login", { replace: true });
    };


    const [open, setOpen] = useState(false);
    
    return (
        <header className="bg-white">

            <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

                {/* LEFT */}
                <LogoLeft/>

                {/* RIGHT SIDE */}
                <div className="ml-auto flex items-center gap-4 relative">

                    <div className="relative">
                        <button
                            onClick={() => setOpen((prev) => !prev)}
                            className="flex items-center gap-3 rounded-lg px-2 py-1 transition hover:bg-blue-50"
                        >
                            <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-bold uppercase shadow-sm">
                                {loggedInUser?.username?.[0]}
                            </div>

                            <div className="text-sm text-left leading-tight">
                                <p className="text-blue-500 text-xs">Welcome</p>
                                <p className="font-semibold text-blue-900">
                                    {loggedInUser?.username}
                                </p>
                            </div>
                        </button>

                        {/* DROPDOWN */}
                        {open && (
                            <div className="absolute right-0 mt-2 w-48 rounded-xl border border-blue-100 bg-white shadow-lg overflow-hidden z-50">

                                <div className="bg-blue-50 px-4 py-2 text-xs text-blue-600 font-medium">
                                    Account
                                </div>

                                <button
                                    onClick={() => {
                                        setOpen(false);
                                        navigate("/profile");
                                    }}
                                    className="w-full text-left px-4 py-2 text-sm text-blue-900 hover:bg-blue-100 transition"
                                >
                                    Profile
                                </button>

                                <button
                                    onClick={() => {
                                        setOpen(false);
                                        handleLogout();
                                    }}
                                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition"
                                >
                                    Logout
                                </button>

                            </div>
                        )}
                    </div>

                </div>

            </div>

        </header>
    );
}