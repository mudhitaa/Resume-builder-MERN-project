import Cookies from "js-cookie";
import axiosInstance from "../config/axiosConfig";

export const changePassword = async (data: {
    oldPassword: string;
    newPassword: string;
}) => {
    const token = Cookies.get("loginCookie");

    const response = await axiosInstance.put(
        "/auth/change-password",
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};