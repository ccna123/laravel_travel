import React from "react";

const BookingInfo = () => {
    return (
        <div className=" bg-white rounded-md p-2 text-xl mt-4">
            <section>
                <p>
                    <span>Customer: </span>
                    <span>Scott</span>
                </p>
                <p>
                    <span>Address: </span>
                    <span>ABC Street, XYZ City</span>
                </p>
            </section>
            <section className="flex flex-col items-start md:flex-row md:items-center md:gap-4 justify-between">
                <p>
                    <span>Email: </span>
                    <span>scott@abc.com</span>
                </p>
                <p>
                    <span>Phone: </span>
                    <span>123-123-123-123</span>
                </p>
            </section>

            <section>
                <div className="flex flex-col items-start md:flex-row md:items-center md:gap-4 justify-between">
                    <p>
                        <span>Destination: </span>
                        <span>Osaka</span>
                    </p>
                    <p>
                        <span>Number of Stays: </span>
                        <span>3</span>
                    </p>
                </div>
                <div className="flex flex-col items-start md:flex-row md:items-center md:gap-4 justify-between">
                    <p>
                        <span>Number of People: </span>
                        <span>4</span>
                    </p>
                    <p>
                        <span>Adult: </span>
                        <span>2</span>
                    </p>
                    <p>
                        <span>Children: </span>
                        <span>2</span>
                    </p>
                    <p>
                        <span>Transaportation: </span>
                        <span>Plane</span>
                    </p>
                </div>
            </section>
            <hr className="border border-slate-200 my-2" />
            <section className="flex justify-between items-center">
                <p className="text-2xl font-bold">Total</p>
                <p className="text-2xl text-red-500 font-bold">1200$</p>
            </section>
        </div>
    );
};

export default BookingInfo;
