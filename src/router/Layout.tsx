import {FC} from "react";
import Navbar from "../components/Navbar";
import {Outlet} from "react-router"

export const Layout: FC = () => {
    return (
        <div
        className={"min-h-screen w-full "}
        >
            <Navbar/>
            <Outlet/>
        </div>
    )
}