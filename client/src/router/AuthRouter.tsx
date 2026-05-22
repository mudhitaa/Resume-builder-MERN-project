
import LandingPage from "../pages/authPages/LandingPage";
import LoginPage from "../pages/authPages/LoginPage";
import RegisterPage from "../pages/authPages/RegisterPage";
import ProfilePage from "../pages/resume/ProfilePage";
export const AuthRouter=
        [{path:"/",element:<LandingPage />},
        {path:"/login",element:<LoginPage />},
        {path:"/register",element:<RegisterPage />},
        {path:"/profile",element:<ProfilePage />},
        ]