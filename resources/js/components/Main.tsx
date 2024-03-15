import React from "react";
import bgVideo from "../../../public/imgs/bgVideo.mp4";
import {
    inputStyle,
    priceInputStyle,
    textStyle,
} from "../../styles/mainSectionSearchDestinationStyle/style";
import { btnStyle } from "../../styles/shareStyle/style";

type MainProps = {
    date: string,
    search: string,
    minPrice: number,
    maxPrice: number,
    setMinPrice: React.Dispatch<React.SetStateAction<number>>
    setMaxPrice: React.Dispatch<React.SetStateAction<number>>
    setSearch: React.Dispatch<React.SetStateAction<string>>
    setDate: React.Dispatch<React.SetStateAction<string>>
    handleClearFilter: () => void,
    handleFilter: (e: React.MouseEvent<HTMLButtonElement>) => void,

}

export const Main = ({
    date,
    setDate,
    search,
    setSearch,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    handleClearFilter,
    handleFilter,
}: MainProps) => {
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
                <section className="bg-slate-100 w-full md:w-[90%] p-3 rounded-lg ">
                    <div className="grid grid-cols-1 mx-4 lg:grid-cols-3 lg:gap-4 items-center">
                        <div>
                            <p className={textStyle()}>
                                Search your destination
                            </p>
                            <div className="flex justify-between items-center p-2 bg-gray-200 rounded-full">
                                <input
                                    data-testid="destination_input"
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className={inputStyle()}
                                />
                            </div>
                        </div>
                        <div>
                            <p className={textStyle()}>Select date</p>
                            <div className="p-3 bg-gray-200 rounded-full">
                                <input
                                    data-testid="date_input"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className={inputStyle()}
                                />
                            </div>
                        </div>
                        <div>
                            <p className={textStyle()}>Enter price</p>

                            <div className="p-3 w-full bg-gray-200 rounded-full my-4">
                                <div className="flex gap-2 w-full">
                                    <input
                                        data-testid="minPrice_input"
                                        type="number"
                                        min={300}
                                        max={2000}
                                        value={minPrice}
                                        onChange={(e) =>
                                            setMinPrice(Number(e.target.value))
                                        }
                                        className={priceInputStyle()}
                                    />
                                    <p>~</p>
                                    <input
                                        data-testid="maxPrice_input"
                                        type="number"
                                        min={300}
                                        max={2000}
                                        value={maxPrice}
                                        onChange={(e) =>
                                            setMaxPrice(Number(e.target.value))
                                        }
                                        className={priceInputStyle()}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 w-[50%] mx-auto mt-4 items-center gap-3">
                        <button
                            data-testid="filterBtn"
                            type="button"
                            className={btnStyle("filter")}
                            onClick={e => handleFilter(e)}
                        >
                            Filter
                        </button>
                        <button
                            data-testid="cancelBtn"
                            type="button"
                            className={btnStyle("cancel")}
                            onClick={handleClearFilter}
                        >
                            Clear
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};
