import { FirstHeader } from "../../components/headers/FirstHeader";
import { ResumeLayout } from "../layouts/ResumeLayout";

export default function ResumeBuilderPage() {
    return (
        <div className="">
            <FirstHeader linktext="Logout" linkurl="/login" logourl="/resume-builder" />
            <ResumeLayout />
        </div>
    );
}