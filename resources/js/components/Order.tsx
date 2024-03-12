import React from "react";
import CustomerInfoInput from "./CustomerInfoInput";
import TourInfoInput from "./TourInfoInput";
import Details from "./Details";
import { btnStyle } from "../../styles/shareStyle/style";
import { Order, TBookingDetailInfo, TBookingInfo, TErrors, TTour } from "../types/type";
import { IBookingInfo, IErrors, ITour, ITourDetail } from "../types/interface";

type OrderProps = {
    errors: TErrors,
    data: TBookingInfo,
    processing: boolean,
    destinationPrice: number,
    calculateNumberOfStay: number,
    calculateNumberOfAdult: number,
    calculateNumberOfChildren: number,
    calculateTransportationFee: number,
    calculateTotal: number,
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void,
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

function Order({
    errors,
    data,
    processing,
    destinationPrice,
    calculateNumberOfStay,
    calculateNumberOfAdult,
    calculateNumberOfChildren,
    calculateTransportationFee,
    calculateTotal,
    handleOnChange,
    handleSubmit,
}: OrderProps) {
    return (
        <div className="bg-slate-200 rounded-xl shadow-xl p-4">
            <div className="grid grid-cols-1 gap-5">
                <form>
                    <CustomerInfoInput
                        customer_name={data.customer_name ?? ""}
                        customer_address={data.customer_address ?? ""}
                        customer_email={data.customer_email ?? ""}
                        customer_phone={data.customer_phone ?? ""}
                        handleOnChange={handleOnChange}
                        errors={errors}
                    />
                    <TourInfoInput
                        number_of_stay={data.number_of_stay ?? 0}
                        number_of_people={data.number_of_people ?? 0}
                        number_of_adult={data.number_of_adult ?? 0}
                        number_of_children={data.number_of_children ?? 0}
                        transportation={data.transportation ?? ""}
                        handleOnChange={handleOnChange}
                        errors={errors}
                    />
                    {Object.keys(errors).length > 0 ? (
                        <p className="text-sm text-red-500 font-bold">
                            All fields must be filled
                        </p>
                    ) : null}
                    <button
                        onClick={e => handleSubmit(e)}
                        type="button"
                        className={btnStyle("book") + " mt-5"}
                        disabled={processing}
                    >
                        Booking
                    </button>
                </form>

                <Details
                    tour={data}
                    destinationPrice={destinationPrice}
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
