import React, { useEffect, useState } from "react";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import AddModal from "../components/AddModal";
import { Inertia } from "@inertiajs/inertia";
import { notify } from "../helper/notfication";
import { ToastContainer } from "react-toastify";
import { handleImageChange } from "../helper/imageChange";
import { tdStyle, thStyle } from "../../styles/adminStyle/style";
import { btnStyle } from "../../styles/shareStyle/style";

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
                            <th scope="col" className={thStyle()}>
                                No.
                            </th>
                            <th scope="col" className={thStyle()}>
                                Destination
                            </th>
                            <th scope="col" className={thStyle()}>
                                Location
                            </th>
                            <th scope="col" className={thStyle()}>
                                Departure Date
                            </th>
                            <th scope="col" className={thStyle()}>
                                Price
                            </th>
                            <th scope="col" className={thStyle()}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tours.map((place, index) => (
                            <tr key={place.id} className="odd:bg-slate-200 ">
                                <td scope="row" className={tdStyle()}>
                                    {index + 1}
                                </td>
                                <td scope="row" className={tdStyle()}>
                                    <span>{place.place_name_jp}</span>
                                    &nbsp;&nbsp;
                                    <span>{place.place_name_en}</span>
                                </td>
                                <td className={tdStyle()}>{place.location}</td>
                                <td className={tdStyle()}>
                                    {place.departure_date}
                                </td>
                                <td className={tdStyle()}>${place.price}</td>
                                <td className={tdStyle()}>
                                    <div className="grid grid-cols-2 gap-4 items-center">
                                        <InertiaLink
                                            href={`/admin/${place.id}/edit`}
                                            className={
                                                btnStyle("edit") +
                                                " text-center"
                                            }
                                        >
                                            Edit
                                        </InertiaLink>
                                        <button
                                            type="button"
                                            onClick={(e) =>
                                                onDelete(e, place.id)
                                            }
                                            className={btnStyle("delete")}
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
