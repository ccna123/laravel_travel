import React, { useState } from "react";

const Tab = ({ children, tabs, handleChangeTab, selectedTab }) => {
    const onChangeTab = (index) => {
        handleChangeTab(index);
    };

    return (
        <section className="m-4">
            <div className="mb-4">
                <ul
                    className="flex flex-wrap -mb-px text-sm font-medium text-center"
                    id="default-tab"
                    data-tabs-toggle="#default-tab-content"
                    role="tablist"
                >
                    {tabs.map((tab, index) => (
                        <li
                            onClick={() => onChangeTab(index)}
                            key={index}
                            className="me-2"
                            role="presentation"
                        >
                            <button
                                className={`inline-block p-4 text-white ${
                                    selectedTab === index
                                        ? "bg-blue-500"
                                        : "bg-slate-400"
                                }  font-bold rounded-t-lg hover:bg-blue-500 duration-150`}
                                id="profile-tab"
                                data-tabs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="default-tab-content">{children}</div>
        </section>
    );
};

export default Tab;
