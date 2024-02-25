import React, { useEffect, useState } from "react";
import CustomerInfoInput from "./CustomerInfoInput";
import TourInfoInput from "./TourInfoInput";
import BookingInfo from "./BookingInfo";
import { Inertia } from "@inertiajs/inertia";

function Order({ place, errors, booking_status, status }) {
    const [peolple, setPeolple] = useState(1);
    const [numOfStay, setNumOfStay] = useState(1);
    const [total, setTotal] = useState(place.price);
    const [selectOption, setSelectOption] = useState("plane");
    const [showDetail, setShowDetail] = useState(false);
    const [form, setForm] = useState({
        customer_name: "",
        customer_email: "",
        customer_address: "",
        customer_phone: "",
        destination: place.place_name_en,
        number_of_stay: "",
        number_of_people: "",
        number_of_adult: "",
        number_of_children: "",
        transportation: "",
    });

    const handleOnChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleShowDetail = () => {
        setShowDetail(!showDetail);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/booking", form);
    };

    // useEffect(() => {
    //     if (selectOption === "plane") {
    //         setTotal(place.price * peolple + numOfStay * 10 + 100);
    //     } else {
    //         setTotal(place.price * peolple + numOfStay * 10 + 30);
    //     }
    // }, [peolple, numOfStay, selectOption]);
    return (
        <div className="bg-slate-200 rounded-xl shadow-xl p-4">
            <div className="grid grid-cols-1 gap-5">
                <form onSubmit={handleSubmit}>
                    <CustomerInfoInput
                        customer_name={form.customer_name}
                        customer_address={form.customer_address}
                        customer_email={form.customer_email}
                        customer_phone={form.customer_phone}
                        handleOnChange={handleOnChange}
                        errors={errors}
                    />
                    <TourInfoInput
                        number_of_stay={form.number_of_stay}
                        number_of_people={form.number_of_people}
                        number_of_adult={form.number_of_adult}
                        number_of_children={form.number_of_children}
                        transportation={form.transportation}
                        handleOnChange={handleOnChange}
                        errors={errors}
                    />
                    {errors ? (
                        <p className="text-sm text-red-500 font-bold">
                            All fields must be filled
                        </p>
                    ) : null}
                    <button
                        type="submit"
                        className="w-full mt-4 bg-blue-500 font-bold p-2 rounded-md text-white hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                    >
                        Booking
                    </button>
                </form>
                <button
                    onClick={handleShowDetail}
                    className="w-full bg-red-500 font-bold p-2 rounded-md text-white hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                >
                    Details
                </button>
                {showDetail ? <BookingInfo /> : null}
            </div>
        </div>
    );
}

export default Order;