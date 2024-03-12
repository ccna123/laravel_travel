import React, { useEffect, useMemo, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import Order from "../components/Order";
import { Inertia } from "@inertiajs/inertia";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../helper/notfication";
import { ITourDetail } from "../types/interface";
import { useForm } from "@inertiajs/inertia-react";
import { TBookingDetailInfo, TBookingInfo, TErrors, TTour } from "../types/type";
import { router } from "@inertiajs/react";
function Booking({ tour, errors }: { tour: TTour, errors: TErrors }) {
    const { data, setData, processing, reset } = useForm({
        customer_name: "",
        customer_email: "",
        customer_address: "",
        customer_phone: "",
        destination: tour.place_name_en,
        number_of_stay: 0,
        number_of_people: 0,
        number_of_adult: 0,
        number_of_children: 0,
        transportation: "",
        total: 0,
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const key = e.target.id;
        const value = e.target.value;
        setData((prev) => ({
            ...prev,
            [key]: value,
        }));

    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.post("/booking", data, {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                notify("Booking successfully", 200);
            },
        });
    };

    const calculateNumberOfStay = useMemo(() => {
        return data.number_of_stay * 10 || 0;
    }, [data.number_of_stay]);
    const calculateNumberOfAdult = useMemo(() => {
        return data.number_of_adult * tour.price || 0;
    }, [data.number_of_adult]);
    const calculateNumberOfChildren = useMemo(() => {
        return data.number_of_children * tour.price || 0;
    }, [data.number_of_children]);

    const calculateTransportationFee = useMemo(() => {
        switch (data.transportation) {
            case "plane":
                return 100;
            case "train":
                return 60;
            case "bullet train":
                return 150;
            case "express bus":
                return 55;
            default:
                return 0;
        }
    }, [data.transportation]);
    const calculateTotal = useMemo(() => {
        return (calculateNumberOfStay +
            calculateNumberOfAdult +
            calculateNumberOfChildren +
            calculateTransportationFee)
    }, [
        calculateNumberOfStay,
        calculateNumberOfAdult,
        calculateNumberOfChildren,
        calculateTransportationFee,
    ]);

    useEffect(() => {
        setData((prev) => ({
            ...prev,
            total: calculateTotal,
        }));
    }, [calculateNumberOfStay,
        calculateNumberOfAdult,
        calculateNumberOfChildren,
        calculateTransportationFee,]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-4">
            <DestinationCard place={tour} />
            <Order
                errors={errors}
                data={data}
                destinationPrice={tour.price}
                processing={processing}
                calculateNumberOfStay={calculateNumberOfStay}
                calculateNumberOfAdult={calculateNumberOfAdult}
                calculateNumberOfChildren={calculateNumberOfChildren}
                calculateTransportationFee={calculateTransportationFee}
                calculateTotal={calculateTotal}
                handleOnChange={handleOnChange}
                handleSubmit={handleSubmit}
            />
            <ToastContainer />
        </div>
    );
}

export default Booking;
