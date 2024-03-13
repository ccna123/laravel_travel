import React from "react";
import { TBookingDetailInfo } from "../types/type";

const Details = ({
    tour,
    destinationPrice,
    calculateNumberOfChildren,
    calculateNumberOfStay,
    calculateNumberOfAdult,
    calculateTransportationFee,
    calculateTotal,
}: TBookingDetailInfo) => {
    return (
        <section className="bg-white w-full p-3 rounded-md ">
            <div className="gap-4 grid grid-cols-2 items-center my-3">
                <section className="w-full">
                    <p>
                        Number of stays: {tour.number_of_stay}{" "}
                        <span>(10$/1 stay)</span>
                    </p>
                    <p>
                        Adult: {tour.number_of_adult}{" "}
                        <span>({destinationPrice}$/1 person)</span>
                    </p>
                    <p>
                        Childrend: {tour.number_of_children}{" "}
                        <span>(283$/1 child)</span>
                    </p>
                    <p>
                        Transportation: {tour.transportation}{" "}
                        <span>({calculateTransportationFee}$)</span>{" "}
                    </p>
                </section>
                <section className="w-full text-right">
                    <p>{calculateNumberOfStay}$</p>
                    <p>{calculateNumberOfAdult.toLocaleString()}$</p>
                    <p>{calculateNumberOfChildren.toLocaleString()}$</p>
                    <p>{calculateTransportationFee}$</p>
                </section>
            </div>
            <hr className="border-2" />
            <section className="my-2">
                <p className="text-red-500 font-bold text-3xl text-right">
                    Total: <span>{calculateTotal.toLocaleString()}$</span>
                </p>
            </section>
        </section>
    );
};

export default Details;
