import ResumeBuilderPage from "../pages/resume/ResumeBuilderPage";
import ProtectedRoute from "../components/auth/ProtectedRoute";

export const ResumeRouter = [
    {
        path: "/resume-builder",
        element: (
            <ProtectedRoute>
                <ResumeBuilderPage />
            </ProtectedRoute>
        )
    },
];