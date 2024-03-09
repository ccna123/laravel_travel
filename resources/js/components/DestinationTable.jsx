import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import { tdStyle, thStyle } from "../../styles/adminStyle/style";
import { btnStyle } from "../../styles/shareStyle/style";

export const DestinationTable = ({ tours, onDelete }) => {
    return (
        <section>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-white uppercase bg-black shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    <tr>
                        <th scope="col" className={thStyle()}>
                            No.
                        </th>
                        <th scope="col" className={thStyle()}>
                            Destination
                        </th>
                        <th scope="col" className={thStyle()}>
                            Location
                        </th>
                        <th scope="col" className={thStyle()}>
                            Departure Date
                        </th>
                        <th scope="col" className={thStyle()}>
                            Price
                        </th>
                        <th scope="col" className={thStyle()}>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tours.map((place, index) => (
                        <tr key={place.id} className="odd:bg-slate-200 ">
                            <td scope="row" className={tdStyle()}>
                                {index + 1}
                            </td>
                            <td scope="row" className={tdStyle()}>
                                <span>{place.place_name_jp}</span>
                                &nbsp;&nbsp;
                                <span>{place.place_name_en}</span>
                            </td>
                            <td className={tdStyle()}>{place.location}</td>
                            <td className={tdStyle()}>
                                {place.departure_date}
                            </td>
                            <td className={tdStyle()}>${place.price}</td>
                            <td className={tdStyle()}>
                                <div className="grid grid-cols-2 gap-4 items-center">
                                    <InertiaLink
                                        href={`/admin/${place.id}/edit`}
                                        className={
                                            btnStyle("edit") + " text-center"
                                        }
                                    >
                                        Edit
                                    </InertiaLink>
                                    <button
                                        type="button"
                                        onClick={(e) => onDelete(e, place.id)}
                                        className={btnStyle("delete")}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};
