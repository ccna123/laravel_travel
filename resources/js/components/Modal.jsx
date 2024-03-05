import React from "react";

const Modal = ({ handleToggleModal }) => {
    return (
        <div className="bg-gray-600/50 w-full min-h-full absolute top-0 left-0">
            <section className="bg-white p-2 rounded-md mt-24 w-[80%] mx-auto">
                <form className="mx-auto w-[50%]">
                    <p className="text-3xl font-bold text-center my-4">
                        Edit Place
                    </p>
                    <section className="grid md:grid-cols-3 gap-4 items-center">
                        <div className="mb-5">
                            <label
                                htmlFor="username-success"
                                className="block mb-2 text-sm font-medium "
                            >
                                Japanese Name
                            </label>
                            <input
                                type="text"
                                id="username-success"
                                className="border-2 border-gray-300 p-2 rounded-md focus:outline-none w-full"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="username-error"
                                className="block mb-2 text-sm font-medium"
                            >
                                English Name
                            </label>
                            <input
                                type="text"
                                id="username-success"
                                className="border-2 border-gray-300 p-2 rounded-md focus:outline-none w-full"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="username-error"
                                className="block mb-2 text-sm font-medium"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="username-success"
                                className="border-2 border-gray-300 p-2 rounded-md focus:outline-none w-full"
                            />
                        </div>
                    </section>
                    <section className="grid md:grid-cols-2 gap-4 items-center">
                        <div className="mb-5">
                            <label
                                htmlFor="username-error"
                                className="block mb-2 text-sm font-medium"
                            >
                                Departure Date
                            </label>
                            <input
                                type="text"
                                id="username-success"
                                className="border-2 border-gray-300 p-2 rounded-md focus:outline-none w-full"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="username-error"
                                className="block mb-2 text-sm font-medium"
                            >
                                Price
                            </label>
                            <input
                                type="text"
                                id="username-success"
                                className="border-2 border-gray-300 p-2 rounded-md focus:outline-none w-full"
                            />
                        </div>
                    </section>
                    <div className="mb-5">
                        <label
                            htmlFor="username-error"
                            className="block mb-2 text-sm font-medium"
                        >
                            Image
                        </label>
                        <input
                            type="file"
                            id="username-success"
                            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none w-full"
                        />
                    </div>

                    <div className="mb-5">
                        <label
                            htmlFor="username-error"
                            className="block mb-2 text-sm font-medium"
                        >
                            Description
                        </label>
                        <textarea
                            name=""
                            id=""
                            cols="10"
                            rows="5"
                            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none w-full resize-none"
                        />
                    </div>
                    <div className="grid md:rid-cols-2 gap-4">
                        <button
                            type="button"
                            className="bg-green-500 text-white font-bold text-xl p-2 rounded-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => handleToggleModal(false)}
                            type="button"
                            className="bg-red-500 mb-4 text-white font-bold text-xl p-2 rounded-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Modal;
