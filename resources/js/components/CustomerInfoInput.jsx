import React from "react";
import Errors from "./Errors";
const CustomerInfoInput = ({
    customer_name,
    customer_address,
    customer_email,
    customer_phone,
    errors,
    handleOnChange,
}) => {
    return (
        <fieldset className="border-2 border-gray-400 p-2 rounded-md">
            <legend className="font-bold">Customer Infomation</legend>
            <div className="flex flex-col gap-4">
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className="fa-solid fa-user"></i>
                    </span>
                    <input
                        value={customer_name}
                        onChange={handleOnChange}
                        type="text"
                        id="customer_name"
                        className={`rounded-none rounded-e-lg ${
                            errors.customer_name
                                ? "bg-red-300 border-red-300 placeholder:text-red-500"
                                : "bg-gray-50 border border-gray-300 text-gray-900"
                        }   flex-1 min-w-0 w-full text-sm p-2.5 focus:outline-none`}
                        placeholder="Customer Name"
                    />
                </div>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <input
                        value={customer_address}
                        onChange={handleOnChange}
                        type="text"
                        id="customer_address"
                        className={`rounded-none rounded-e-lg ${
                            errors.customer_address
                                ? "bg-red-300 border-red-300 placeholder:text-red-500"
                                : "bg-gray-50 border border-gray-300 text-gray-900"
                        }   flex-1 min-w-0 w-full text-sm p-2.5 focus:outline-none`}
                        placeholder="Address"
                    />
                </div>
                <section className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="flex border w-full">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <i className="fa-solid fa-envelope"></i>
                        </span>
                        <input
                            value={customer_email}
                            onChange={handleOnChange}
                            type="email"
                            id="customer_email"
                            className={`rounded-none rounded-e-lg ${
                                errors.customer_email
                                    ? "bg-red-300 border-red-300 placeholder:text-red-500"
                                    : "bg-gray-50 border border-gray-300 text-gray-900"
                            }   flex-1 min-w-0 w-full text-sm p-2.5 focus:outline-none`}
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="flex w-full">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <i className="fa-solid fa-phone"></i>
                        </span>
                        <input
                            value={customer_phone}
                            onChange={handleOnChange}
                            type="text"
                            id="customer_phone"
                            className={`rounded-none rounded-e-lg ${
                                errors.customer_phone
                                    ? "bg-red-300 border-red-300 placeholder:text-red-500"
                                    : "bg-gray-50 border border-gray-300 text-gray-900"
                            }   flex-1 min-w-0 w-full text-sm p-2.5 focus:outline-none`}
                            placeholder="Phone Number"
                        />
                    </div>
                </section>
            </div>
        </fieldset>
    );
};

export default CustomerInfoInput;
