import axiosInstance from "../config/axiosConfig";
import Cookies from "js-cookie";

export interface IUpdateProfile {
    username: string;
    email: string;
}

// GET user profile
export const getMyProfile = async () => {
    const token = Cookies.get("loginCookie");

    const response = await axiosInstance.get(
        "/auth/me",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data.data;
};

// UPDATE profile
export const updateProfile = async (data: IUpdateProfile) => {
    const token = Cookies.get("loginCookie");

    const response = await axiosInstance.put(
        "/auth/me",
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data.data;
};