import React, { useEffect, useState } from "react";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import AddModal from "../components/AddModal";
import { Inertia } from "@inertiajs/inertia";
import { notify } from "../helper/notfication";
import { ToastContainer } from "react-toastify";
import { handleImageChange } from "../helper/imageChange";

const Admin = ({ tours, errors }) => {
    const [toggleModal, setToggleModal] = useState(false);
    const [errorsList, setErrorsList] = useState({});

    const { data, processing, setData } = useForm({
        place_name_jp: "",
        place_name_en: "",
        location: "",
        price: 0,
        departure_date: "",
        description: "",
        image: null,
    });

    useEffect(() => {
        setErrorsList(errors);
    }, [errors]);

    const handleToggleModal = () => {
        setToggleModal(!toggleModal);

        if (!toggleModal) {
            setErrorsList({});
        }
    };

    const onDelete = (e, id) => {
        e.preventDefault();
        Inertia.delete(`/admin/${id}`, {
            onSuccess: () => {
                notify("Deleted successfully", 300);
            },
        });
    };

    const onImageChange = (e) => handleImageChange(e, setData);

    const onAdd = (e) => {
        e.preventDefault();
        Inertia.post("/admin", data, {
            onSuccess: () => {
                notify("Add new destination successfully", 200);
            },
        });
    };

    return (
        <section>
            <ToastContainer />
            <i
                onClick={handleToggleModal}
                className="fa-solid fa-circle-plus text-4xl my-2 mx-2 text-green-500 cursor-pointer"
            />

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4 my-4 h-[512px]">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-white uppercase bg-black shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Destination
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Departure Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tours.map((place, index) => (
                            <tr key={place.id} className="odd:bg-slate-200 ">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                    {index + 1}
                                </th>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                    <span>{place.place_name_jp}</span>
                                    &nbsp;&nbsp;
                                    <span>{place.place_name_en}</span>
                                </td>
                                <td className="px-6 py-4">{place.location}</td>
                                <td className="px-6 py-4">
                                    {place.departure_date}
                                </td>
                                <td className="px-6 py-4">${place.price}</td>
                                <td className="px-6 py-4">
                                    <div className="grid grid-cols-2 gap-4 items-center">
                                        <InertiaLink
                                            href={`/admin/${place.id}/edit`}
                                            className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150 bg-blue-500 p-2 text-center rounded-md font-bold text-white w-full"
                                        >
                                            Edit
                                        </InertiaLink>
                                        <button
                                            type="button"
                                            onClick={(e) =>
                                                onDelete(e, place.id)
                                            }
                                            className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150 bg-red-500 p-2 rounded-md font-bold text-white w-full"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {toggleModal ? (
                <AddModal
                    errors={errorsList}
                    data={data}
                    processing={processing}
                    onAdd={onAdd}
                    setData={setData}
                    onDelete={onDelete}
                    onImageChange={onImageChange}
                    handleToggleModal={handleToggleModal}
                />
            ) : null}
        </section>
    );
};

export default Admin;
