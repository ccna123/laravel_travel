import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import React from "react";
import { handleImageChange } from "../helper/imageChange";
import { errorStyle } from "../helper/error";
import { notify } from "../helper/notfication";
import { Inertia } from "@inertiajs/inertia";
import { ToastContainer } from "react-toastify";

const Edit = ({ tour, errors }) => {
    const { data, processing, setData, put } = useForm({
        place_name_jp: tour.place_name_jp || "",
        place_name_en: tour.place_name_en || "",
        location: tour.location || "",
        price: tour.price || 1,
        departure_date: tour.departure_date || "",
        description: tour.description || "",
        image: null,
        _method: "PUT",
    });

    const onImageChange = (e) => handleImageChange(e, setData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        Inertia.post(`/admin/${tour.id}`, data, {
            onSuccess: () => {
                notify("Update success!", 200);
            },
        });
    };

    return (
        <section className="mt-10">
            <ToastContainer />
            <form
                onSubmit={handleSubmit}
                className="mx-auto w-[50%] my-4 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-4 rounded-md"
            >
                <input type="hidden" name="_method" value="PUT" />
                <section className="grid md:grid-cols-3 gap-4 items-center">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Japan Name
                        </label>
                        <input
                            type="text"
                            id="place_name_jp"
                            className={errorStyle(errors.place_name_jp)}
                            value={data.place_name_jp}
                            onChange={(e) =>
                                setData("place_name_jp", e.target.value)
                            }
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            English Name
                        </label>
                        <input
                            type="text"
                            id="place_name_en"
                            className={errorStyle(errors.place_name_en)}
                            value={data.place_name_en}
                            onChange={(e) =>
                                setData("place_name_en", e.target.value)
                            }
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            className={errorStyle(errors.location)}
                            value={data.location}
                            onChange={(e) =>
                                setData("location", e.target.value)
                            }
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
                            className={errorStyle(errors.departure_date)}
                            value={data.departure_date}
                            onChange={(e) =>
                                setData("departure_date", e.target.value)
                            }
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
                            className={errorStyle(errors.price)}
                            value={data.price}
                            onChange={(e) => setData("price", e.target.value)}
                        />
                    </div>
                </section>
                <section
                    className={`grid ${
                        data.image ? "grid-cols-2" : "grid-cols-1"
                    }  items-center gap-2`}
                >
                    <div className="mb-5">
                        <label
                            htmlFor="username-error"
                            className="block mb-2 text-sm font-medium"
                        >
                            Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            onChange={(e) => onImageChange(e, setData)}
                            id="username-success"
                            className={errorStyle(errors.image)}
                        />
                    </div>
                    {data.image ? (
                        <img
                            src={URL.createObjectURL(data.image)}
                            className="h-[200px] w-full bg-cover"
                        />
                    ) : null}
                </section>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Description
                    </label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        id="description"
                        cols="20"
                        rows="10"
                        className={errorStyle(errors.description)}
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
