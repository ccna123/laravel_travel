import React from "react";

const TourInfoInput = ({
    number_of_stay,
    number_of_people,
    number_of_adult,
    number_of_children,
    transportation,
    errors,
    handleOnChange,
}) => {
    return (
        <fieldset className="border-2 border-gray-400 p-2 rounded-md">
            <legend className="font-bold">Tour Infomation</legend>
            <div className="flex flex-col gap-4">
                <section className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="flex w-full">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <i className="fa-solid fa-hotel"></i>
                        </span>
                        <input
                            value={number_of_stay}
                            onChange={handleOnChange}
                            id="number_of_stay"
                            min={1}
                            type="number"
                            className={`rounded-none rounded-e-lg ${
                                errors.number_of_stay
                                    ? "bg-red-300 border-red-300 placeholder:text-red-500"
                                    : "bg-gray-50 border border-gray-300 text-gray-900"
                            }   flex-1 min-w-0 w-full text-sm p-2.5 focus:outline-none`}
                            placeholder="Number of stays"
                        />
                    </div>
                    <div class="flex w-full">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <i className="fa-solid fa-people-group"></i>
                        </span>
                        <input
                            value={number_of_people}
                            onChange={handleOnChange}
                            id="number_of_people"
                            min={1}
                            type="number"
                            className={`rounded-none rounded-e-lg ${
                                errors.number_of_people
                                    ? "bg-red-300 border-red-300 placeholder:text-red-500"
                                    : "bg-gray-50 border border-gray-300 text-gray-900"
                            }   flex-1 min-w-0 w-full text-sm p-2.5 focus:outline-none`}
                            placeholder="Number of people"
                        />
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="flex w-full">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <i className="fa-solid fa-user-tie"></i>
                        </span>
                        <input
                            value={number_of_adult}
                            onChange={handleOnChange}
                            type="number"
                            id="number_of_adult"
                            min={1}
                            className={`rounded-none rounded-e-lg ${
                                errors.number_of_adult
                                    ? "bg-red-300 border-red-300 placeholder:text-red-500"
                                    : "bg-gray-50 border border-gray-300 text-gray-900"
                            }   flex-1 min-w-0 w-full text-sm p-2.5 focus:outline-none`}
                            placeholder="Adult. Ex: 1"
                        />
                    </div>
                    <div className="flex w-full">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <i className="fa-solid fa-children"></i>
                        </span>
                        <input
                            value={number_of_children}
                            onChange={handleOnChange}
                            type="number"
                            id="number_of_children"
                            min={1}
                            className={`rounded-none rounded-e-lg ${
                                errors.number_of_children
                                    ? "bg-red-300 border-red-300 placeholder:text-red-500"
                                    : "bg-gray-50 border border-gray-300 text-gray-900"
                            }   flex-1 min-w-0 w-full text-sm p-2.5 focus:outline-none`}
                            placeholder="Children. Ex: 2"
                        />
                    </div>
                    <select
                        value={transportation}
                        onChange={handleOnChange}
                        id="transportation"
                        className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    >
                        <option value="none">Select Transportation</option>
                        <option value="plane">Plane</option>
                        <option value="train">Train</option>
                        <option value="bullet_train">Bullet Train</option>
                        <option value="express_bus">Express Bus</option>
                    </select>
                </section>
            </div>
        </fieldset>
    );
};

export default TourInfoInput;
