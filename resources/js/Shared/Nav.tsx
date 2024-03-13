import { InertiaLink } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import navLink from "../../styles/navStyles/navLink";
import navContainer from "../../styles/navStyles/navContainer";
import { Link } from "@inertiajs/react";

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
        <div className="bg-white flex flex-col lg:flex-row lg:justify-between lg:items-center p-4">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <Link href="/">
                        <img
                            src="/imgs/airplane.png"
                            className="w-16 h-16 text-white"
                        />
                    </Link>
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
                className={`${isNavOpen ? "flex" : "hidden"
                    }  left-0 z-10 top-14 md:w-fit md:bg-white md:ml-96 bg-slate-200 w-full mt-4 rounded-lg`}
            >
                <ul className={navContainer()}>
                    <Link href="/tours" className={navLink()}>
                        Home
                    </Link>

                    <Link href="/tours/search" className={navLink()}>
                        Search Tour
                    </Link>
                    <Link href="/admin" className={navLink()}>
                        Admin
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
