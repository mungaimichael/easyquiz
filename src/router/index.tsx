import { RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../pages/Login";
import {Layout} from "./Layout.tsx";
import Homepage from "../pages/Homepage";

export default  function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element:<Layout/>,
            children:[
                {
                    path:'',
                    element:<Homepage/>
                },
                {
                    path:'login',
                    element:<LoginPage/>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}