import React from "react";
import CustomerInfoInput from "./CustomerInfoInput";
import TourInfoInput from "./TourInfoInput";
import Details from "./Details";

function Order({
    place,
    errors,
    form,
    tourDetail,
    calculateNumberOfStay,
    calculateNumberOfAdult,
    calculateNumberOfChildren,
    calculateTransportationFee,
    calculateTotal,
    handleOnChange,
    handleSubmit,
}) {
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

                <Details
                    place_price={place.price}
                    tourDetailInfo={tourDetail}
                    calculateNumberOfAdult={calculateNumberOfAdult}
                    calculateNumberOfChildren={calculateNumberOfChildren}
                    calculateNumberOfStay={calculateNumberOfStay}
                    calculateTransportationFee={calculateTransportationFee}
                    calculateTotal={calculateTotal}
                />
            </div>
        </div>
    );
}

export default Order;
