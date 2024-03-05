import React, { useMemo } from "react";

const Details = ({ tourDetail, place_price }) => {
    const calculateNumberOfStay = useMemo(() => {
        return tourDetail.number_of_stay * 10 || 0;
    }, [tourDetail.number_of_stay]);
    const calculateNumberOfAdult = useMemo(() => {
        return tourDetail.number_of_adult * place_price || 0;
    }, [tourDetail.number_of_adult]);
    const calculateNumberOfChildren = useMemo(() => {
        return (tourDetail.number_of_children * place_price) / 2 || 0;
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
            calculateNumberOfAdult +
            calculateTransportationFee
        );
    }, [
        calculateNumberOfStay,
        calculateNumberOfAdult,
        calculateNumberOfChildren,
        calculateTransportationFee,
    ]);

    return (
        <section className="bg-white w-full p-3 rounded-md ">
            <div className="gap-4 grid grid-cols-2 items-center my-3">
                <section className="w-full">
                    <p>
                        Number of stays: {tourDetail.number_of_stay}{" "}
                        <span>(10$/1 stay)</span>
                    </p>
                    <p>
                        Adult: {tourDetail.number_of_adult}{" "}
                        <span>({place_price}$/1 person)</span>
                    </p>
                    <p>
                        Childrend: {tourDetail.number_of_children}{" "}
                        <span>(283$/1 child)</span>
                    </p>
                    <p>
                        Transportation: {tourDetail.transportation}{" "}
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
