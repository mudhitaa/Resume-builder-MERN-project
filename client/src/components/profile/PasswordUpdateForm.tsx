import { useState } from "react";
import { changePassword } from "../../services/PasswordServices";
import { toast } from "sonner";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { Heading1 } from "../../components/typography/Heading";
import { FormActionButton } from "../../from/Button";

export const PasswordUpdateForm = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async () => {
    try {
      setLoading(true);

      await changePassword({
        oldPassword,
        newPassword,
      });

      toast.success("Password updated. Please login again.");

      logoutUser();
      navigate("/login");
    } catch (err) {
      toast.error("Password update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-5 w-1/2">
      <Heading1 pagetitle="Change Password" className="mb-4" />
        

      <input
        type="password"
        className="w-full p-2 border rounded mb-3"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />

      <input
        type="password"
        className="w-full p-2 border rounded mb-4"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <FormActionButton submitBtnTxt="Save Password" onClick={handleChangePassword}/>
      
    </div>
  );
};