import axiosInstance from "../config/axiosConfig";
import Cookies from "js-cookie";
import type { IResumeData } from "../types/FormTypes";


// GET logged in user resume
export const getMyResume = async () => {
    const token = Cookies.get("loginCookie");
    const response = await axiosInstance.get(
        "/resume-builder/me",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data.data;
};


// save resume
export const saveResume = async (resumeData: IResumeData) => {
    const token = Cookies.get("loginCookie");
    const response = await axiosInstance.post(
        "/resume-builder/save",
        resumeData,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data.data;
};