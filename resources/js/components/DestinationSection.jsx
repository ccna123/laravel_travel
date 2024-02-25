import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";
import Paginator from "./Paginator";

export const DestinationSection = ({ tours }) => {
    return (
        <div className="p-4 mt-4">
            <h1 className="text-4xl font-bold text-center">
                Most visted destination
            </h1>
            <div className="w-full grid md:grid-cols-3 sm:grid-cols-1 gap-6 p-4">
                {tours.data.length > 0 ? (
                    tours.data.map((place, index) => (
                        <DestinationCard key={index} place={place} />
                    ))
                ) : (
                    <p className="text-xl font-bold">There are no tours !</p>
                )}
            </div>
            <Paginator links={tours.links} />
        </div>
    );
};
