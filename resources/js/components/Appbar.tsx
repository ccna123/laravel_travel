import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Appbar = () => {
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
          <img src="/imgs/logo.jpg" className="w-16 h-16 text-white" />
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
        <ul className="flex md:flex-row flex-col gap-8 p-2 text-black font-bold">
          <Link
            to="/"
            className="text-2xl hover:cursor-pointer hover:bg-gray-400 hover:text-black p-2 rounded-lg duration-150"
          >
            Home
          </Link>
          <li className="text-2xl hover:cursor-pointer hover:bg-gray-400 hover:text-black p-2 rounded-lg duration-150">
            Services
          </li>
          <li className="text-2xl hover:cursor-pointer hover:bg-gray-400 hover:text-black p-2 rounded-lg duration-150">
            Packages
          </li>
          <li className="text-2xl hover:cursor-pointer hover:bg-gray-400 hover:text-black p-2 rounded-lg duration-150">
            About
          </li>
        </ul>
      </nav>

      <div className="w-fit">
        {isNavOpen && (
          <button
            type="button"
            className="
          font-bold text-white w-full  uppercase bg-blue-600 hover:bg-green-400 duration-100 hover:text-black px-10 py-2 rounded-lg"
          >
            Book now
          </button>
        )}
      </div>
    </div>
  );
};
