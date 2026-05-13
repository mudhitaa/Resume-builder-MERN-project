import axios from "axios";
import { AppConfig } from "./appConfig";

const axiosInstance = axios.create({
    baseURL: AppConfig.baseUrl,
    timeout:30000,       //30sec
    timeoutErrorMessage:"server time out...",
    headers:{
        "Content-Type": "application/json"
    }
})

export default axiosInstance