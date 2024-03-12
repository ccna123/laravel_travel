import React from "react";
import { TLink } from "../types/type";
import { Link } from "@inertiajs/react";


const Paginator = ({ links }: { links: TLink[] }) => {
    return (
        <div className="text-center mt-2 flex gap-4 justify-center">
            {links.map((link: TLink) => {
                return (
                    <div
                        key={link.label}
                        className={`${link.active
                            ? "bg-green-500 text-black"
                            : "text-black font-bold"
                            } px-3 py-2 rounded`}
                    >
                        {link.label === "&laquo; Previous" ? (
                            <Link
                                preserveScroll={true}
                                preserveState={true}
                                href={link.url}
                            >
                                &laquo; Previous
                            </Link>
                        ) : link.label === "Next &raquo;" ? (
                            <Link
                                preserveScroll={true}
                                preserveState={true}
                                href={link.url}
                            >
                                Next &raquo;
                            </Link>
                        ) : (
                            <Link
                                preserveScroll={true}
                                preserveState={true}
                                href={link.url}
                            >
                                {link.label}
                            </Link>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Paginator;
