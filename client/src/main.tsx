import { createRoot } from "react-dom/client";

import "./assets/css/global.css"
import RouterConfig from "./router/Router";


createRoot(document.getElementById('root')!).render(
    <>
    <RouterConfig/>
    </>   
)