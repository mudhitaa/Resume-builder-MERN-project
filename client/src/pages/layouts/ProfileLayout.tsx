import { useEffect, useState } from "react";
import bgImage from "../../assets/images/landingbg.jpg";
import { Spinner } from "../../ui/Loading";
import { getMyProfile } from "../../services/ProfileService";
import { ProfileUpdateForm } from "../../components/profile/ProfileUpdateForm";
import { PasswordUpdateForm } from "../../components/profile/PasswordUpdateForm";
import { type IProfileFormData } from "../../types/AuthTypes";
import { DeleteProfileForm } from "../../components/profile/DeleteProfileForm";

export const ProfileLayout = () => {
  const [loading, setLoading] = useState(true);

  const [profileData, setProfileData] = useState<IProfileFormData>({
    username: "",
    email: "",
  });

  // LOAD PROFILE
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getMyProfile();
        setProfileData({
          username: data.username,
          email: data.email,
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
    <div
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 max-w-5xl bg-blue-50 rounded-2xl shadow-md p-6 space-y-6">

            <div className="w-full lg:w-1/3">
                <ProfileUpdateForm
                profileData={profileData}
                setProfileData={setProfileData}
                />
            </div>

            {/* RIGHT / BOTTOM */}
            <div className="w-full lg:w-1/3">
                <PasswordUpdateForm />
            </div>
            <div className="w-full lg:w-1/3">     
              <DeleteProfileForm/>
            </div>
      </div>

    </div>
    </>
  );
};