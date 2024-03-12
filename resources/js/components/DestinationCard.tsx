import React from "react";
import { StarRating } from "./StarRating";
import { InertiaLink } from "@inertiajs/inertia-react";
import { fontBold } from "../../styles/destinationCardStyle/style";
import { btnStyle } from "../../styles/shareStyle/style";
import { ITour } from "../types/interface";
import { TTour } from "../types/type";
import { Link } from "@inertiajs/react";

function DestinationCard({ place }: { place: TTour }) {
    const isBookingPage = window.location.href.includes("booking");
    const isAdminsPage = window.location.href.includes("admin");
    return (
        <div className="rounded-xl shadow-xl hover:cursor-pointer">
            <div className="w-full h-96">
                <img
                    src={`/imgs/${place.image}`}
                    className="rounded-t-xl w-full h-full"
                />
            </div>
            <div className="p-5">
                <h1 className={fontBold()}>{place.place_name_jp}</h1>
                <h4 className={fontBold()}>{place.place_name_en}</h4>
                <div className="flex items-center">
                    <i className="fa-solid fa-location-dot mr-4"></i>
                    <p>{place.location}</p>
                </div>
                <p>Departure: {place.departure_date}</p>
                {/* <div className="flex gap-4 mt-4">
                    <StarRating />
                </div> */}
                <hr className="border my-4" />
                <div className="flex justify-around items-center">
                    <p className={fontBold() + " text-4xl"}>Price</p>
                    <p className={fontBold() + " text-4xl text-red-500"}>
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
                    <Link
                        as="button"
                        href="/"
                        className={btnStyle("back") + " mt-5"}
                    >
                        Go back
                    </Link>
                ) : isAdminsPage ? (
                    <Link
                        href={`booking/${place.id}`}
                        className="duration-150 mt-4 w-fit px-4 py-2 rounded-2xl flex items-center gap-4 "
                    >
                        <button
                            type="button"
                            className={btnStyle("edit")}
                        >
                            Edit
                        </button>
                        <button type="button" className={btnStyle("delete")}>
                            Delete
                        </button>
                    </Link>
                ) : (
                    <Link
                        as="button"
                        href={`booking/${place.id}`}
                        className={btnStyle("book") + " mt-4"}
                    >
                        Book
                    </Link>
                )}
            </div>
        </div>
    );
}

export default DestinationCard;
