import React, { useState, useContext, useEffect } from "react";
import bgVideo from "../../../public/imgs/bgVideo.mp4";

export const Main = ({
    handleSearchTour,
    handleResetSearchTour,
    handleFilterTourByDate,
    handleFilterTourByPrice,
    handleCLearFilterTourByPrice,
}) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [search, setSearch] = useState("");
    const [date, setDate] = useState("");

    const handleSearchDestination = () => {
        handleSearchTour(search);
    };

    const handleClearSearchTour = () => {
        setSearch("");
        handleResetSearchTour();
    };

    const handleSelectDate = (e) => {
        setDate(e.target.value);
        handleFilterTourByDate(e.target.value);
    };

    const handleFilterPrice = () => {
        const min = parseInt(minPrice);
        const max = parseInt(maxPrice);

        if (min > max) {
            alert(
                "the first price must not greater than the second price. Please enter again"
            );
        } else {
            handleFilterTourByPrice(minPrice, maxPrice);
        }
    };
    const handleClearPrice = () => {
        setMinPrice(0);
        setMaxPrice(0);
        handleCLearFilterTourByPrice();
    };

    return (
        <div className="w-fit">
            <video
                src={bgVideo}
                loop
                autoPlay
                muted
                className="relative w-full h-full object-cover"
            />
            <div className="lg:absolute lg:top-0 lg:left-0 w-full md:mt-56 flex flex-col justify-center items-center">
                <div className="w-1/2">
                    <div>
                        <p className="uppercase text-sm text-white">
                            our packages
                        </p>
                    </div>
                    <div>
                        <div className="mb-4">
                            <p className="lg:text-2xl text-white font-bold">
                                Search your Holiday
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-100 w-full md:w-[90%] p-3 rounded-lg grid grid-cols-1 mx-4 lg:grid-cols-3 lg:gap-4 shadow-xl">
                    <div>
                        <p className="text-center md:text-left my-4">
                            Search your destination
                        </p>
                        <div className="flex justify-between items-center p-2 bg-gray-200 rounded-full">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-80 bg-gray-200 border-none outline-none rounded-full"
                            />
                            <div className="flex items-center">
                                <i
                                    onClick={handleSearchDestination}
                                    className="text-green-500 cursor-pointer fa-solid fa-compass text-3xl"
                                />
                                <i
                                    onClick={handleClearSearchTour}
                                    className="text-red-500 cursor-pointer fa-solid fa-circle-xmark ml-2 text-3xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-center md:text-left my-4">
                            Select date
                        </p>
                        <div className="p-3 bg-gray-200 rounded-full">
                            <input
                                type="date"
                                value={date}
                                onChange={handleSelectDate}
                                className="w-full bg-gray-200 border-none outline-none rounded-full"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-center md:text-left my-4">
                            Enter price
                        </p>

                        <div className="p-3 w-full bg-gray-200 rounded-full mt-4">
                            <div className="flex gap-2 w-fit">
                                <input
                                    type="number"
                                    min={300}
                                    max={2000}
                                    value={minPrice}
                                    onChange={(e) =>
                                        setMinPrice(e.target.value)
                                    }
                                    className="w-full rounded-full px-2"
                                />
                                <p>~</p>
                                <input
                                    type="number"
                                    min={300}
                                    max={2000}
                                    value={maxPrice}
                                    onChange={(e) =>
                                        setMaxPrice(e.target.value)
                                    }
                                    className="w-full rounded-full px-2"
                                />
                                <button
                                    type="button"
                                    className="bg-blue-400 rounded-full text-white font-bold px-4"
                                    onClick={handleFilterPrice}
                                >
                                    Filter
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-400 rounded-full text-white font-bold px-4"
                                    onClick={handleClearPrice}
                                >
                                    Clear
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
