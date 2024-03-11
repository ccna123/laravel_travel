import React, { useState } from "react";
import { DestinationSection } from "../components/DestinationSection";
import { Footer } from "../components/Footer";
import { BackToTopBtn } from "../components/BackToTopBtn";
import { Main } from "../components/Main";
import { Inertia } from "@inertiajs/inertia";
import { ITours } from "../types/interface";

function Home({ tours }: { tours: ITours }) {

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [search, setSearch] = useState("");
    const [date, setDate] = useState("");

    const handleSearchTour = (tourName: string) => {
        Inertia.get(
            "/tours",
            { searchTour: tourName },
            {
                preserveState: true, onSuccess: (data) => {
                    console.log(data);

                }
            },

        );
    };
    const handleSelectDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };

    const handleFilterTourByDate = (date: string) => {
        if (date === "") {
            Inertia.get("/tours");
        } else {
            Inertia.get(
                "/tours",
                { filterDate: date },
                { preserveState: true }
            );
        }
    };

    const handleFilterTourByPrice = (minPrice: number, maxPrice: number) => {
        Inertia.get(
            "/tours",
            {
                minPrice,
                maxPrice,
            },
            { preserveState: true }
        );
    };

    const handleClearFilter = () => {
        Inertia.get("/tours");
    };

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        if (search !== "") {
            handleSearchTour(search);
        } else if (date !== "") {
            handleFilterTourByDate(date);
        } else if (minPrice > 0 || maxPrice > 0) {
            handleFilterTourByPrice(minPrice, maxPrice);
        }
    };

    return (
        <section className="overflow-hidden">
            <Main
                date={date}
                setDate={setDate}
                search={search}
                setSearch={setSearch}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                handleFilter={handleFilter}
                handleClearFilter={handleClearFilter}
            />
            <DestinationSection tours={tours} />
            <Footer />
            <BackToTopBtn />
        </section>
    );
}

export default Home;
