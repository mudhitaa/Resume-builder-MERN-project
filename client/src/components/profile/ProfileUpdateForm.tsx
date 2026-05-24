import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {profileDTO,type IProfileFormData,} from "../../types/AuthTypes";
import { updateProfile } from "../../services/ProfileService";
import { toast } from "sonner";
import { AuthInput } from "../../from/AuthInput";
import { Heading1 } from "../../components/typography/Heading";
import { FormActionButton } from "../../from/Button";

interface Props {
  profileData: IProfileFormData;
  setProfileData: (data: IProfileFormData) => void;
}

export const ProfileUpdateForm = ({ profileData }: Props) => {
    
    const {handleSubmit,control,formState: { errors , isSubmitting},} = useForm<IProfileFormData>({
        resolver: zodResolver(profileDTO),
        defaultValues: profileData,
    });

  const onSubmit = async (data: IProfileFormData) => {
    try {
      await updateProfile(data);
      toast.success("Profile updated successfully");
    } catch (err: any) {
        const message = err?.response?.data?.message || "Profile update failed";
        toast.error(message);
    }
  };

  return (
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm space-y-5 "
        >
        <Heading1 pagetitle="Profile Settings" className="mb-4" />

        <div className="space-y-4">
            <div>
            <AuthInput
                type="text"
                name="username"
                placeholder="Username"
                handler={control}
                errMsg={errors?.username?.message}
            />
            </div>

            <div>
            <AuthInput
                type="email"
                name="email"
                placeholder="Email"
                handler={control}
                errMsg={errors?.email?.message}
            />
            </div>
        </div>

        <FormActionButton
                  submitBtnTxt={
                       isSubmitting ? "Updating..." : "Save Changes"
                    }
                  type="submit"
          />
        </form>
  );
};