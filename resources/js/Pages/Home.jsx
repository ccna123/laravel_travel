import React from "react";
import { DestinationSection } from "../components/DestinationSection";
import { Footer } from "../components/Footer";
import { BackToTopBtn } from "../components/BackToTopBtn";
import { Main } from "../components/Main";
import { Inertia } from "@inertiajs/inertia";

function Home({ tours }) {
    const handleSearchTour = (tourName) => {
        Inertia.get(
            "/tours",
            { searchTour: tourName },
            { preserveState: true }
        );
    };

    const handleResetSearchTour = () => {
        Inertia.get("/tours");
    };

    const handleFilterTourByDate = (date) => {
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

    const handleFilterTourByPrice = (minPrice, maxPrice) => {
        Inertia.get(
            "/tours",
            {
                minPrice,
                maxPrice,
            },
            { preserveState: true }
        );
    };
    const handleCLearFilterTourByPrice = () => {
        Inertia.get("/tours");
    };

    return (
        <section className="overflow-hidden">
            <Main
                handleSearchTour={handleSearchTour}
                handleResetSearchTour={handleResetSearchTour}
                handleFilterTourByDate={handleFilterTourByDate}
                handleFilterTourByPrice={handleFilterTourByPrice}
                handleCLearFilterTourByPrice={handleCLearFilterTourByPrice}
            />
            <DestinationSection tours={tours} />
            <Footer />
            <BackToTopBtn />
        </section>
    );
}

export default Home;
