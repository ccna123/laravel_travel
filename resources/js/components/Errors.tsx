import React from "react";

const Errors = ({ error_mess }) => {
    return <div className="text-sm text-red-500 font-bold">{error_mess}</div>;
};

export default Errors;
