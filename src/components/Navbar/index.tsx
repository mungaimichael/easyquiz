import {useState} from "react";
import {Link} from "react-router-dom";

export default  function Navbar() {

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    return (
        <div className={`w-full h-14  flex items-center justify-between  `} >
            <div
            className={` w-full h-full flex  items-center justify-between `}
            >
                <Link to={"/"}>
                    <div className={"flex items-center "}>
                        <img
                            className={"w-8 md:w-9 md:mx-2 z-10"}
                            src={"/images/logo.png"} alt="logo"/>
                        <span
                            className={" text-secondary font-heading hidden md:inline-block lg:w-auto "}>

                spooky
                <span className={"text-primary"}>season</span>
            </span>
                    </div>
                </Link>
                <img
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className={"w-8 md:hidden z-10 "}
                    alt={"burger"}
                    src={`${showMobileMenu ? "/images/cancel.svg" : "/images/burger.svg"}`}
                />
            </div>
            {
                showMobileMenu ? <MobileMenu/> : null
            }
        </div>
    )
}


const MobileMenu = () => {
    return (
        <div
        className={"min-h-screen w-full top-0 right-0 flex flex-col justify-between absolute bg-secondary"}
        >
            <ul
            className={"w-full min-h-screen bg-accent justify-start pt-14 pl-10 items-start flex flex-col"}
            >
                <li
                    className={"text-text text-3xl capitalize"}
                >About</li>
                <li
                    className={"text-text text-3xl capitalize"}

                >
                    login
                </li>
            </ul>
        </div>
    )
}