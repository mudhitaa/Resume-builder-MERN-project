import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {passwordUpdateDTO,type IPasswordUpdateForm,} from "../../types/AuthTypes";
import { changePassword } from "../../services/PasswordServices";
import { toast } from "sonner";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { Heading1 } from "../../components/typography/Heading";
import { FormActionButton } from "../../from/Button";
import { AuthInput } from "../../from/AuthInput";

export const PasswordUpdateForm = () => {
    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    const {handleSubmit,control,formState: { errors, isSubmitting },} = useForm<IPasswordUpdateForm>({
        resolver: zodResolver(passwordUpdateDTO),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
        },
    });

    const onSubmit = async (data: IPasswordUpdateForm) => {
        try {
            await changePassword(data);
            toast.success("Password updated. Please login again.");
            logoutUser();
            navigate("/login");
        } catch {
            toast.error("Password update failed");
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-xl shadow-sm space-y-5"
        >
            <Heading1 pagetitle="Change Password" className="mb-4" />

            <AuthInput
                type="password"
                name="oldPassword"
                placeholder="Old Password"
                handler={control}
                errMsg={errors?.oldPassword?.message}
            />

            <AuthInput
                type="password"
                name="newPassword"
                placeholder="New Password"
                handler={control}
                errMsg={errors?.newPassword?.message}
            />

            <FormActionButton
                submitBtnTxt={
                    isSubmitting ? "Updating..." : "Save Password"
                }
                type="submit"
            />
        </form>
    );
};