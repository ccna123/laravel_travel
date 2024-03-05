import React, { useCallback, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import Modal from "../components/Modal";

const Admin = ({ tours }) => {
    const [toggleModal, setToggleModal] = useState(false);

    return (
        <div className="w-full grid md:grid-cols-3 sm:grid-cols-1 gap-6 p-4">
            {tours.length > 0
                ? tours.map((place, index) => (
                      <DestinationCard
                          key={index}
                          place={place}
                          handleToggleModal={setToggleModal}
                      />
                  ))
                : null}

            {toggleModal ? (
                <Modal
                    handleToggleModal={setToggleModal}
                    toggleModal={toggleModal}
                />
            ) : null}
        </div>
    );
};

export default Admin;
