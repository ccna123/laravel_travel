import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import { tdStyle, thStyle } from "../../styles/adminStyle/style";

export const BookingTable = ({ bookings }) => {
    return (
        <section>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-white uppercase bg-black shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    <tr>
                        <th scope="col" className={thStyle()}>
                            No.
                        </th>
                        <th scope="col" className={thStyle()}>
                            Tour code
                        </th>
                        <th scope="col" className={thStyle()}>
                            Customer Name
                        </th>
                        <th scope="col" className={thStyle()}>
                            Customer Email
                        </th>
                        <th scope="col" className={thStyle()}>
                            Destination
                        </th>
                        <th scope="col" className={thStyle()}>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={booking.id} className="odd:bg-slate-200 ">
                            <td scope="row" className={tdStyle()}>
                                {index + 1}
                            </td>
                            <td scope="row" className={tdStyle()}>
                                <span>{booking.code}</span>
                            </td>
                            <td className={tdStyle()}>
                                {booking.customer_name}
                            </td>
                            <td className={tdStyle()}>
                                {booking.customer_email}
                            </td>
                            <td className={tdStyle()}>{booking.destination}</td>
                            <td className={tdStyle()}>
                                <p
                                    className={`${
                                        booking.status === "Booked"
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                    } bg-green-500 p-2 rounded-md text-white font-bold text-center`}
                                >
                                    {booking.status}
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};
