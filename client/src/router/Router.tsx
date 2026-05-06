import { createBrowserRouter, RouterProvider } from "react-router";
import {AuthRouter} from "./AuthRouter";

const router = createBrowserRouter([
    ...AuthRouter,
]);

export default function RouterConfig(){
    return(
        <>
            <RouterProvider router={router} />
        </>
    )
}