import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

const Edit = ({ tour }) => {
    return (
        <section className="mt-10">
            <form className="mx-auto w-[50%] my-4 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-4 rounded-md">
                <section className="grid md:grid-cols-3 gap-4 items-center">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Japan Name
                        </label>
                        <input
                            type="text"
                            id="place_name_jp"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-none"
                            placeholder="name@flowbite.com"
                            value={tour.place_name_jp}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            English Name
                        </label>
                        <input
                            type="text"
                            id="place_name_en"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-none"
                            placeholder="name@flowbite.com"
                            value={tour.place_name_en}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-none"
                            placeholder="name@flowbite.com"
                            value={tour.location}
                        />
                    </div>
                </section>
                <section className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Departure Date
                        </label>
                        <input
                            type="date"
                            id="departure_date"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-none"
                            placeholder="name@flowbite.com"
                            value={tour.departure_date}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Price
                        </label>
                        <input
                            type="number"
                            min={1}
                            id="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-none"
                            placeholder="name@flowbite.com"
                            value={tour.price}
                        />
                    </div>
                </section>
                <section className="grid grid-cols-2 items-center gap-2">
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
                    <img
                        src={`/imgs/${tour.img}`}
                        alt=""
                        className="h-[200px] w-full bg-cover"
                    />
                </section>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Description
                    </label>
                    <textarea
                        value={tour.description}
                        id="description"
                        cols="20"
                        rows="10"
                        className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-none"
                    />
                </div>
                <section className="grid grid-cols-2 items-center gap-4">
                    <button className="bg-green-500 p-2 rounded-md text-white font-bold hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150">
                        Save
                    </button>
                    <InertiaLink
                        href="/admin"
                        className="bg-red-500 p-2 rounded-md text-center text-white font-bold hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150"
                    >
                        Cancel
                    </InertiaLink>
                </section>
            </form>
        </section>
    );
};

export default Edit;
