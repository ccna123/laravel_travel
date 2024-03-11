import React from "react";
import { errorStyle } from "../helper/error";
import { inputDivContainer, spanIcon } from "../../styles/inputInfoStyle/style";
import { fontBold } from "../../styles/destinationCardStyle/style";
import { IBookingInfo, IErrors } from "../types/interface";

type CustomerInfoInputProps = {
    customer_name: string
    customer_address: string
    customer_email: string
    customer_phone: string
    errors: IErrors
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomerInfoInput = ({
    customer_name,
    customer_address,
    customer_email,
    customer_phone,
    errors,
    handleOnChange,
}: CustomerInfoInputProps) => {
    return (
        <fieldset className="border-2 border-gray-400 p-2 rounded-md">
            <legend className={fontBold()}>Customer Infomation</legend>
            <div className="flex flex-col gap-4">
                <div className={inputDivContainer()}>
                    <span className={spanIcon()}>
                        <i className="fa-solid fa-user"></i>
                    </span>
                    <input
                        value={customer_name}
                        onChange={handleOnChange}
                        type="text"
                        id="customer_name"
                        className={errorStyle(errors.customer_name)}
                        placeholder="Customer Name"
                    />
                </div>
                <div className={inputDivContainer()}>
                    <span className={spanIcon()}>
                        <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <input
                        value={customer_address}
                        onChange={handleOnChange}
                        type="text"
                        id="customer_address"
                        className={errorStyle(errors.customer_address)}
                        placeholder="Address"
                    />
                </div>
                <section className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className={inputDivContainer()}>
                        <span className={spanIcon()}>
                            <i className="fa-solid fa-envelope"></i>
                        </span>
                        <input
                            value={customer_email}
                            onChange={handleOnChange}
                            type="email"
                            id="customer_email"
                            className={errorStyle(errors.customer_email)}
                            placeholder="Email Address"
                        />
                    </div>
                    <div className={inputDivContainer()}>
                        <span className={spanIcon()}>
                            <i className="fa-solid fa-phone"></i>
                        </span>
                        <input
                            value={customer_phone}
                            onChange={handleOnChange}
                            type="text"
                            id="customer_phone"
                            className={errorStyle(errors.customer_phone)}
                            placeholder="Phone Number"
                        />
                    </div>
                </section>
            </div>
        </fieldset>
    );
};

export default CustomerInfoInput;
