import axiosInstance from "../config/axiosConfig";
import Cookies from "js-cookie";

export const deleteProfile = async () => {

    const token = Cookies.get("loginCookie");

    const response = await axiosInstance.delete(
        "/auth/me",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};