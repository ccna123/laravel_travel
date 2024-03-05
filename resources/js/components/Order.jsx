import React, { useState } from "react";
import CustomerInfoInput from "./CustomerInfoInput";
import TourInfoInput from "./TourInfoInput";
import Details from "./Details";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../helper/notfication";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

function Order({ place, errors, booking_status, status }) {
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
                    destination: place.place_name_en,
                    number_of_stay: "",
                    number_of_people: "",
                    number_of_adult: "",
                    number_of_children: "",
                    transportation: "",
                });
            },
        });
        // notify(booking_status, status);
    };

    return (
        <div className="bg-slate-200 rounded-xl shadow-xl p-4">
            <ToastContainer />
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
                    {Object.keys(errors).length > 0 ? (
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

                <Details tourDetail={tourDetail} place_price={place.price} />
            </div>
        </div>
    );
}

export default Order;
