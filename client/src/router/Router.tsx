import { createBrowserRouter, RouterProvider } from "react-router";
import {AuthRouter} from "./AuthRouter";
import ErrorPage from "../pages/error/ErrorPage";

const router = createBrowserRouter([
    ...AuthRouter,

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