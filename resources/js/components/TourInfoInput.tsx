import React from "react";
import { errorStyle } from "../helper/error";
import { inputDivContainer, spanIcon } from "../../styles/inputInfoStyle/style";
import { TErrors } from "../types/type";

type TourInfoInputProps = {
    number_of_stay: number
    number_of_people: number
    number_of_adult: number
    number_of_children: number
    transportation: string
    errors: TErrors
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void
}

const TourInfoInput = ({
    number_of_stay,
    number_of_people,
    number_of_adult,
    number_of_children,
    transportation,
    errors,
    handleOnChange,
}: TourInfoInputProps) => {
    return (
        <fieldset className="border-2 border-gray-400 p-2 rounded-md">
            <legend className="font-bold">Tour Infomation</legend>
            <div className="flex flex-col gap-4">
                <section className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className={inputDivContainer()}>
                        <span className={spanIcon()}>
                            <i className="fa-solid fa-hotel"></i>
                        </span>
                        <input
                            value={number_of_stay}
                            onChange={handleOnChange}
                            id="number_of_stay"
                            min={1}
                            type="number"
                            className={errorStyle(errors, errors.number_of_stay)}
                            placeholder="Number of stays"
                        />
                    </div>
                    <div className={inputDivContainer()}>
                        <span className={spanIcon()}>
                            <i className="fa-solid fa-people-group"></i>
                        </span>
                        <input
                            value={number_of_people}
                            onChange={handleOnChange}
                            id="number_of_people"
                            min={1}
                            type="number"
                            className={errorStyle(errors, errors.number_of_people)}
                            placeholder="Number of people"
                        />
                    </div>
                </section>
                <section className="grid grid-cols-3 gap-4 items-center">
                    <div className={inputDivContainer()}>
                        <span className={spanIcon()}>
                            <i className="fa-solid fa-user-tie"></i>
                        </span>
                        <input
                            value={number_of_adult}
                            onChange={handleOnChange}
                            type="number"
                            id="number_of_adult"
                            min={1}
                            className={errorStyle(errors, errors.number_of_adult)}
                            placeholder="Adult. Ex: 1"
                        />
                    </div>
                    <div className={inputDivContainer()}>
                        <span className={spanIcon()}>
                            <i className="fa-solid fa-children"></i>
                        </span>
                        <input
                            value={number_of_children}
                            onChange={handleOnChange}
                            type="number"
                            id="number_of_children"
                            min={1}
                            className={errorStyle(errors, errors.number_of_children)}
                            placeholder="Children. Ex: 2"
                        />
                    </div>
                    <div className={inputDivContainer()}>
                        <span className={spanIcon()}>
                            <i className="fa-solid fa-car"></i>
                        </span>
                        <select
                            value={transportation}
                            onChange={handleOnChange}
                            id="transportation"
                            className={errorStyle(errors, errors.transportation)}
                        >
                            <option value="none">Select Transportation</option>
                            <option value="plane">Plane</option>
                            <option value="train">Train</option>
                            <option value="bullet train">Bullet Train</option>
                            <option value="express bus">Express Bus</option>
                        </select>
                    </div>
                </section>
            </div>
        </fieldset>
    );
};

export default TourInfoInput;
