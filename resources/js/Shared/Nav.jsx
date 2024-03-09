import { InertiaLink } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import navLink from "../../styles/navStyles/navLink";
import navContainer from "../../styles/navStyles/navContainer";

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleNavOpen = () => {
        setIsNavOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth >= 1024) {
                setIsNavOpen(true);
            } else {
                setIsNavOpen(false);
            }
        };
        handleSize();
        window.addEventListener("resize", handleSize);
        return () => window.removeEventListener("resize", handleSize);
    }, []);

    return (
        <div className="bg-white flex flex-col lg:flex-row lg:justify-between lg:items-center p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img
                        src="/imgs/airplane.png"
                        className="w-16 h-16 text-white"
                    />
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    onClick={handleNavOpen}
                    className="w-12 h-12 lg:hidden block text-black cursor-pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </div>
            <nav
                className={`${
                    isNavOpen ? "flex" : "hidden"
                }  left-0 z-10 top-14 w-fit md:ml-96`}
            >
                <ul className={navContainer()}>
                    <InertiaLink href="/tours" className={navLink()}>
                        Home
                    </InertiaLink>

                    <InertiaLink href="/tours/search" className={navLink()}>
                        Search Tour
                    </InertiaLink>
                    <InertiaLink href="/login" className={navLink()}>
                        Login
                    </InertiaLink>
                    <InertiaLink href="/admin" className={navLink()}>
                        Admin
                    </InertiaLink>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
