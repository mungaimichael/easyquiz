import { RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import Register from "../pages/Register";
import {Layout} from "./Layout.tsx";
import Homepage from "../pages/Homepage";
import QuestionPage from "../pages/Question";

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
                    element:<Register/>
                }
            ]
        },
        {
            path:'question',
            element:<QuestionPage/>
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}