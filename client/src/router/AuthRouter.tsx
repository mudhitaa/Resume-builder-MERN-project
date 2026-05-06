
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
export const AuthRouter=
        [{path:"/",element:<LandingPage />},
        {path:"/login",element:<LoginPage />},
        {path:"/register",element:<RegisterPage />},
        ]