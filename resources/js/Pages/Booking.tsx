import React, { useEffect, useMemo, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import Order from "../components/Order";
import { Inertia } from "@inertiajs/inertia";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../helper/notfication";
import { BookingInfo, ITour, ITourDetail } from "../types/interface";
import { useForm } from "@inertiajs/inertia-react";
function Booking({ tour, errors }: { tour: ITour, errors: {} }) {
    const { data, setData, processing, reset } = useForm({
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

    const [tourDetail, setTourDetail] = useState<ITourDetail>({
        number_of_stay: 0,
        number_of_adult: 0,
        number_of_children: 0,
        transportation: ""
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.id;
        const value = e.target.value;
        setData((prev) => ({
            ...prev,
            [key]: value,
        }));

        if (key === "number_of_stay") {
            setTourDetail((prev) => ({
                ...(prev as ITourDetail),
                number_of_stay: Number(value),
            }));
        } else if (key === "number_of_people") {
            setTourDetail((prev) => ({
                ...(prev as ITourDetail),
                number_of_people: Number(value),
            }));
        }
        if (key === "number_of_adult") {
            setTourDetail((prev) => ({
                ...(prev as ITourDetail),
                number_of_adult: Number(value),
            }));
        }
        if (key === "number_of_children") {
            setTourDetail((prev) => ({
                ...(prev as ITourDetail),
                number_of_children: Number(value),
            }));
        }
        if (key === "transportation") {
            setTourDetail((prev) => ({
                ...(prev as ITourDetail),
                transportation: value,
            }));
        }
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        Inertia.post("/booking", data, {
            onSuccess: () => {
                reset()
                setTourDetail({
                    number_of_stay: 0,
                    number_of_adult: 0,
                    number_of_children: 0,
                    transportation: ""
                });
                notify("Booking successfully", 200);
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
        setData((prev) => ({
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
                data={data}
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
