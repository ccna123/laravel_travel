import React, { memo } from "react";
import { StarRating } from "./StarRating";
import { InertiaLink } from "@inertiajs/inertia-react";

function DestinationCard({ place }) {
    const isBookingPage = window.location.href.includes("booking");
    return (
        <div className="rounded-xl shadow-xl hover:cursor-pointer">
            <div className="w-full h-96">
                <img
                    src={`/imgs/${place.img}`}
                    className="rounded-t-xl w-full h-full"
                />
            </div>
            <div className="p-5">
                <h1 className="font-bold text-xl">{place.place_name_jp}</h1>
                <h4 className="font-bold">{place.place_name_en}</h4>
                <div className="flex items-center">
                    <i className="fa-solid fa-location-dot mr-4"></i>
                    <p>日本</p>
                </div>
                <p>Departure: {place.departure_date}</p>
                <div className="flex gap-4 mt-4">
                    <StarRating />
                </div>
                <hr className="border my-4" />
                <div className="flex justify-around items-center">
                    <p className="text-4xl font-bold">Price</p>
                    <p className="text-4xl font-bold text-red-500">
                        ${place.price}
                    </p>
                </div>
                <hr className="border my-4" />
                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Autem harum quo exercitationem quas fugit vitae
                        provident. Temporibus, voluptate, commodi nulla
                        molestiae mollitia exercitationem accusamus obcaecati
                        illum laborum facilis excepturi molestias?
                    </p>
                </div>
                {isBookingPage ? (
                    <InertiaLink
                        href="/"
                        className=" hover:bg-black hover:text-white duration-150 bg-orange-400 mt-4 w-fit px-4 py-2 rounded-2xl flex items-center gap-4 text-white"
                    >
                        <button type="button" className="font-bold">
                            Go back
                        </button>
                    </InertiaLink>
                ) : (
                    <InertiaLink
                        href={`booking/${place.id}`}
                        className=" hover:bg-black hover:text-white duration-150 bg-green-400 mt-4 w-fit px-4 py-2 rounded-2xl flex items-center gap-4 text-white"
                    >
                        <button type="button" className="font-bold">
                            Book
                        </button>
                        <i className="fa-solid fa-folder"></i>
                    </InertiaLink>
                )}
            </div>
        </div>
    );
}

export default memo(DestinationCard);
