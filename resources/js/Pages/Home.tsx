import React, { useState } from "react";
import { DestinationSection } from "../components/DestinationSection";
import { Footer } from "../components/Footer";
import { BackToTopBtn } from "../components/BackToTopBtn";
import { Main } from "../components/Main";
import { TTours } from "../types/type";
import { router } from "@inertiajs/react";

function Home({ tours }: { tours: TTours }) {

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [search, setSearch] = useState("");
    const [date, setDate] = useState("");

    const handleSearchTour = (tourName: string) => {
        router.get(
            "/tours",
            { searchTour: tourName },
            {
                preserveState: true,
                preserveScroll: true
            },

        );
    };
    const handleFilterTourByDate = (date: string) => {
        if (date === "") {
            router.get("/tours");
        } else {
            router.get(
                "/tours",
                { filterDate: date },
                { preserveState: true }
            );
        }
    };

    const handleFilterTourByPrice = (minPrice: number, maxPrice: number) => {
        if (maxPrice < minPrice) {
            alert('Please input a max price greater than or equal to the minimum price')
        } else {
            router.get(
                "/tours",
                {
                    minPrice,
                    maxPrice,
                },
                { preserveState: true }
            );
        }
    };

    const handleClearFilter = () => {
        router.get("/tours");
    };

    const handleFilter = (e: React.MouseEvent<HTMLButtonElement>): void => {
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
