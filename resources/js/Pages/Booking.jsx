import React, { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import Order from "../components/Order";
import { usePage } from "@inertiajs/inertia-react";

function Booking({ tour, booking_status, status }) {
    const { errors } = usePage().props;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-4">
            <DestinationCard place={tour} />
            <Order
                place={tour}
                errors={errors}
                booking_status={booking_status}
                status={status}
            />
        </div>
    );
}

export default Booking;
