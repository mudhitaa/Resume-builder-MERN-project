import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { ReactNode } from "react";
import { toast } from "sonner";
import { useAuth } from "../../hooks/useAuth";

export default function ProtectedRoute({
    children
}: Readonly<{ children: ReactNode }>) {

    const navigate = useNavigate();
    const {loggedInUser}= useAuth()
        useEffect(() => {
            if (!loggedInUser) {
                navigate('/login');
                toast.info("You need to login");
            }
        }, [loggedInUser, navigate]);
  
    return children;
}