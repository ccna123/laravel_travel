import React, { useEffect, useMemo, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import Order from "../components/Order";
import { Inertia } from "@inertiajs/inertia";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../helper/notfication";
function Booking({ tour, booking_status, status, errors }) {
    const [form, setForm] = useState({
        customer_name: "",
        customer_email: "",
        customer_address: "",
        customer_phone: "",
        destination: tour.place_name_en,
        number_of_stay: "",
        number_of_people: "",
        number_of_adult: "",
        number_of_children: "",
        transportation: "",
        total: 0,
    });

    const [tourDetail, setTourDetail] = useState({});

    const handleOnChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));

        if (key === "number_of_stay") {
            setTourDetail((prev) => ({
                ...prev,
                number_of_stay: value,
            }));
        } else if (key === "number_of_people") {
            setTourDetail((prev) => ({
                ...prev,
                number_of_people: value,
            }));
        }
        if (key === "number_of_adult") {
            setTourDetail((prev) => ({
                ...prev,
                number_of_adult: value,
            }));
        }
        if (key === "number_of_children") {
            setTourDetail((prev) => ({
                ...prev,
                number_of_children: value,
            }));
        }
        if (key === "transportation") {
            setTourDetail((prev) => ({
                ...prev,
                transportation: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/booking", form, {
            onSuccess: () => {
                setForm({
                    customer_name: "",
                    customer_email: "",
                    customer_address: "",
                    customer_phone: "",
                    destination: tour.place_name_en,
                    number_of_stay: "",
                    number_of_people: "",
                    number_of_adult: "",
                    number_of_children: "",
                    transportation: "",
                });
                setTourDetail({});
                notify(booking_status, status);
            },
        });
    };

    const calculateNumberOfStay = useMemo(() => {
        return tourDetail.number_of_stay * 10 || 0;
    }, [tourDetail.number_of_stay]);
    const calculateNumberOfAdult = useMemo(() => {
        return tourDetail.number_of_adult * tour.price || 0;
    }, [tourDetail.number_of_adult]);
    const calculateNumberOfChildren = useMemo(() => {
        return tourDetail.number_of_children * tour.price || 0;
    }, [tourDetail.number_of_children]);

    const calculateTransportationFee = useMemo(() => {
        switch (tourDetail.transportation) {
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
    }, [tourDetail.transportation]);
    const calculateTotal = useMemo(() => {
        return (
            calculateNumberOfStay +
            calculateNumberOfAdult +
            calculateNumberOfChildren +
            calculateTransportationFee
        );
    }, [
        calculateNumberOfStay,
        calculateNumberOfAdult,
        calculateNumberOfChildren,
        calculateTransportationFee,
    ]);

    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            total: calculateTotal,
        }));
    }, [tourDetail]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-4">
            <DestinationCard place={tour} />
            <Order
                place={tour}
                errors={errors}
                booking_status={booking_status}
                status={status}
                form={form}
                tourDetail={tourDetail}
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
