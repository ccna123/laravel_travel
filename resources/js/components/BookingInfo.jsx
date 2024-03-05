import React from "react";

const BookingInfo = ({ tour }) => {
    return (
        <div className=" bg-white rounded-md p-2 text-xl mt-4">
            <section>
                <p>
                    <span>Customer: </span>
                    <span>{tour.customer_name}</span>
                </p>
                <p>
                    <span>Address: </span>
                    <span>{tour.customer_address}</span>
                </p>
            </section>
            <section className="flex flex-col items-start md:flex-row md:items-center md:gap-4 justify-between">
                <p>
                    <span>Email: </span>
                    <span>{tour.customer_email}</span>
                </p>
                <p>
                    <span>Phone: </span>
                    <span>{tour.customer_phone}</span>
                </p>
            </section>

            <section>
                <div className="flex flex-col items-start md:flex-row md:items-center md:gap-4 justify-between">
                    <p>
                        <span>Destination: </span>
                        <span>{tour.destination}</span>
                    </p>
                    <p>
                        <span>Number of Stays: </span>
                        <span>{tour.number_of_stay}</span>
                    </p>
                </div>
                <div className="flex flex-col items-start md:flex-row md:items-center md:gap-4 justify-between">
                    <p>
                        <span>Number of People: </span>
                        <span>{tour.number_of_people}</span>
                    </p>
                    <p>
                        <span>Adult: </span>
                        <span>{tour.number_of_adult}</span>
                    </p>
                    <p>
                        <span>Children: </span>
                        <span>{tour.number_of_children}</span>
                    </p>
                    <p>
                        <span>Transaportation: </span>
                        <span>{tour.transportation}</span>
                    </p>
                </div>
            </section>
            <hr className="border border-slate-200 my-2" />
            <section className="flex justify-between items-center">
                <p className="text-2xl font-bold">Total</p>
                <p className="text-2xl text-red-500 font-bold">
                    {tour.total.toLocaleString()}$
                </p>
            </section>
        </div>
    );
};

export default BookingInfo;
