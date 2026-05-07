import { createBrowserRouter, RouterProvider } from "react-router";
import {AuthRouter} from "./AuthRouter";
import ErrorPage from "../pages/error/ErrorPage";
import { ResumeRouter } from "./ResumeRouter";

const router = createBrowserRouter([
    ...AuthRouter,
    ...ResumeRouter,

    {
        path: "*",
        element: <ErrorPage />
    }
]);

export default function RouterConfig(){
    return(
        <>
            <RouterProvider router={router} />
        </>
    )
}