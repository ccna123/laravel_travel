import React from "react";
import { liStyle } from "../../styles/footerStyle/style";

export const Footer = () => {
    return (
        <div className="p-4 bg-gradient-to-r from-cyan-300 to-blue-200">
            <div className="md:flex md:justify-center md:gap-48 gap-10 grid grid-cols-1 md:items-center mb-4">
                <div>
                    <h5 className="text-white font-bold">keep in touch</h5>
                    <h1 className="text-4xl text-white font-bold">
                        Travel with us
                    </h1>
                </div>
                <div>
                    <input
                        className="border md:w-80 w-full px-4 py-2 rounded-full flex items-center justify-center focus:outline-none"
                        type="email"
                        placeholder="Enter Email Address"
                    />
                </div>
                <div className="flex cursor-pointer hover:scale-105 duration-150 items-center justify-center gap-4 rounded-full px-4 py-2 bg-blue-400">
                    <button
                        type="button"
                        className="text-white text-2xl font-bold"
                    >
                        Send
                    </button>
                    <i className="fa-solid fa-paper-plane text-white"></i>
                </div>
            </div>
            <div className="shadow-lg">
                <div className="bg-white rounded-t-xl grid md:grid-cols-3 gap-4 p-4">
                    <div>
                        <h1 className="uppercase font-bold text-2xl">Travel</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eius iste culpa numquam aliquam aperiam optio
                            voluptate harum temporibus aliquid placeat. Laborum
                            corporis dolorum velit aspernatur, assumenda nihil
                            et non neque.
                        </p>
                        <div className="flex gap-4 my-6">
                            <i className="fa-brands fa-facebook fa-lg"></i>
                            <i className="fa-brands fa-twitter fa-lg"></i>
                            <i className="fa-brands fa-instagram fa-lg"></i>
                            <i className="fa-brands fa-linkedin fa-lg"></i>
                            <i className="fa-brands fa-youtube fa-lg"></i>
                        </div>
                    </div>
                    <div>
                        <h1 className="uppercase font-bold text-2xl">
                            our agency
                        </h1>
                        <ul>
                            <li className={liStyle()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                                <p>Services</p>
                            </li>
                            <li className={liStyle()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                                <p>Insurance</p>
                            </li>
                            <li className={liStyle()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                                <p>Agency</p>
                            </li>
                            <li className={liStyle()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                                <p>Tourism</p>
                            </li>
                            <li className={liStyle()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                                <p>Payment</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="uppercase font-bold text-2xl">
                            partners
                        </h1>
                        <ul>
                            <li className={liStyle()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                                <p>Booking</p>
                            </li>
                            <li className={liStyle()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                                <p>RentalCar</p>
                            </li>
                            <li className={liStyle()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                                <p>HostelWorld</p>
                            </li>
                            <li className={liStyle()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                                <p>Trivago</p>
                            </li>
                            <li className={liStyle()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                                <p>TripAdvisor</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-green-400 rounded-b-xl text-center font-bold text-2xl">
                    <p>Copyrights&copy; 2023 Thanh</p>
                </div>
            </div>
        </div>
    );
};
