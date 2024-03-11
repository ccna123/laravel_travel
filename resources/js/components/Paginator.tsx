import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

type linkProps<> = {
    label: string;
    active: boolean;
    url: string
}

const Paginator = ({ links }: { links: linkProps[] }) => {
    return (
        <div className="text-center mt-2 flex gap-4 justify-center">
            {links?.map((link: linkProps) => {
                return (
                    <div
                        key={link.label}
                        className={`${link.active
                            ? "bg-green-500 text-black"
                            : "text-black font-bold"
                            } px-3 py-2 rounded`}
                    >
                        {link.label === "&laquo; Previous" ? (
                            <InertiaLink
                                preserveScroll={true}
                                preserveState={true}
                                href={link.url}
                            >
                                &laquo; Previous
                            </InertiaLink>
                        ) : link.label === "Next &raquo;" ? (
                            <InertiaLink
                                preserveScroll={true}
                                preserveState={true}
                                href={link.url}
                            >
                                Next &raquo;
                            </InertiaLink>
                        ) : (
                            <InertiaLink
                                preserveScroll={true}
                                preserveState={true}
                                href={link.url}
                            >
                                {link.label}
                            </InertiaLink>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Paginator;
