import { createRoot } from "react-dom/client";

import "./assets/css/global.css"
import RouterConfig from "./router/Router";
import AuthProvider from "./context/provider/AuthProvider";


createRoot(document.getElementById('root')!).render(
    <>
    <AuthProvider>
    <RouterConfig/>
    </AuthProvider>
    </>   
)