import React, { useState } from "react";
import BookingInfo from "../components/BookingInfo";
import { router } from "@inertiajs/react";
import { TBookingInfo } from "../types/type";

const Search = ({ tour }: { tour: TBookingInfo | null }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearchTour = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault()
        if (searchInput === "") {
            alert("Please enter a search")
        } else {

            router.post("/tours/search", { searchInput });
        }
    };

    return (
        <div className="bg-slate-200 min-h-screen p-4 overflow-hidden">
            <div className="lg:w-[80%] mx-auto">
                <div className="flex mx-auto">
                    <span
                        onClick={e => handleSearchTour(e)}
                        data-testid="searchBtn"
                        className="inline-flex cursor-pointer items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input
                        value={searchInput}
                        data-testid="search_input"
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text"
                        className="rounded-none focus:outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900  block w-full text-sm p-2.5 "
                    />
                </div>
                {tour ? (
                    <BookingInfo tour={tour} />
                ) : (
                    <p className="text-xl mt-3">There are no tours</p>
                )}
            </div>
        </div>
    );
};

export default Search;
