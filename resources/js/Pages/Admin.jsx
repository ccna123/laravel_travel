import React, { useEffect, useState } from "react";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import AddModal from "../components/AddModal";
import { Inertia } from "@inertiajs/inertia";
import { notify } from "../helper/notfication";
import { ToastContainer } from "react-toastify";
import { handleImageChange } from "../helper/imageChange";
import { tdStyle, thStyle } from "../../styles/adminStyle/style";
import { btnStyle } from "../../styles/shareStyle/style";
import { DestinationTable } from "../components/DestinationTable";
import { BookingTable } from "../components/BookingTable";
import Tab from "../components/Tab";

const Admin = ({ tours, errors, bookings }) => {
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
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = ["Destination", "Booking Tour"];

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
    const handleChangeTab = (index) => {
        setSelectedTab(index);
    };
    return (
        <section>
            <ToastContainer />
            <i
                onClick={handleToggleModal}
                className="fa-solid fa-circle-plus text-4xl my-2 mx-2 text-green-500 cursor-pointer"
            />

            <Tab
                tabs={tabs}
                handleChangeTab={handleChangeTab}
                selectedTab={selectedTab}
            >
                <div className="relative overflow-x-auto my-4 h-[512px]">
                    {selectedTab === 0 ? (
                        <DestinationTable tours={tours} onDelete={onDelete} />
                    ) : (
                        <BookingTable bookings={bookings} />
                    )}
                </div>
            </Tab>
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
