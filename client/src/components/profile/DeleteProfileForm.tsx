import { deleteProfile } from "../../services/DeleteProfileService";
import { toast } from "sonner";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { Heading1 } from "../typography/Heading";
import { FormActionButton } from "../../from/Button";

export const DeleteProfileForm =()=>{

    const { logoutUser } = useAuth();
    const navigate = useNavigate();
    
    const handleDeleteAccount = async () => {
        const confirmed = window.confirm("Are you sure you want to delete your account?" );
        if (!confirmed) return;
        try {
                await deleteProfile();
                toast.success("Account deleted successfully");
                logoutUser();
                navigate("/register");
        } catch {
                toast.error("Failed to delete account");
        }
    };

    return(<>
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-5">

    <Heading1 pagetitle="Delete Account" className="mb-4" />
    

    <p className="text-sm text-red-600 mb-6">
        This action is permanent and cannot be undone. 
        <br/>
        Please make sure to download your resumes as PDF files before deleting your account.
    </p>

     <FormActionButton
             submitBtnTxt={ "Delete"}
             type="button"
             onClick={handleDeleteAccount}
    />

</div></>)
}