import React from "react";
import { errorStyle } from "../helper/error";
import { IErrors, ITour } from "../types/interface";

type AddModalProps = {
    data: ITour,
    processing: boolean,
    errors: IErrors,
    handleToggleModal: () => void,
    onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onAdd: (e: React.MouseEvent<HTMLButtonElement>) => void,
    setData: (key: string, value: string | number) => void
}

const AddModal = ({
    errors,
    data,
    processing,
    setData,
    handleToggleModal,
    onImageChange,
    onAdd,

}: AddModalProps) => {
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onImageChange(e);
    };

    const onCloseModal = () => {
        handleToggleModal();
    };

    const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
        onAdd(e);
    };
    return (
        <div className="bg-gray-600/50 w-full min-h-full absolute top-0 left-0">
            <section className="bg-white p-2 rounded-md mt-24 w-[80%] mx-auto">
                <form
                    // onSubmit={onAdd}
                    className="mx-auto w-[50%]"
                    encType="multipart/form-data"
                >
                    <p className="text-3xl font-bold text-center my-4">
                        Add New Destination
                    </p>
                    <section className="grid md:grid-cols-3 gap-4 items-center">
                        <div className="mb-5">
                            <label
                                htmlFor="username-success"
                                className="block mb-2 text-sm font-medium "
                            >
                                Japanese Name
                            </label>
                            <input
                                value={data.place_name_jp}
                                onChange={(e) =>
                                    setData("place_name_jp", e.target.value)
                                }
                                type="text"
                                className={errorStyle(errors.place_name_jp)}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="username-error"
                                className="block mb-2 text-sm font-medium"
                            >
                                English Name
                            </label>
                            <input
                                type="text"
                                value={data.place_name_en}
                                onChange={(e) =>
                                    setData("place_name_en", e.target.value)
                                }
                                className={errorStyle(errors.place_name_en)}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="username-error"
                                className="block mb-2 text-sm font-medium"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                value={data.location}
                                onChange={(e) =>
                                    setData("location", e.target.value)
                                }
                                className={errorStyle(errors.location)}
                            />
                        </div>
                    </section>
                    <section className="grid md:grid-cols-2 gap-4 items-center">
                        <div className="mb-5">
                            <label
                                htmlFor="username-error"
                                className="block mb-2 text-sm font-medium"
                            >
                                Departure Date
                            </label>
                            <input
                                type="date"
                                value={data.departure_date}
                                onChange={(e) =>
                                    setData("departure_date", e.target.value)
                                }
                                className={errorStyle(errors.departure_date)}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="username-error"
                                className="block mb-2 text-sm font-medium"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                min={1}
                                value={data.price}
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                                className={errorStyle(errors.price)}
                            />
                        </div>
                    </section>
                    <section
                        className={`grid ${data.image ? "grid-cols-2" : "grid-cols-1"
                            }  items-center gap-2`}
                    >
                        <div className="mb-5">
                            <label
                                htmlFor="username-error"
                                className="block mb-2 text-sm font-medium"
                            >
                                Image
                            </label>
                            <input
                                type="file"
                                name="image"
                                onChange={handleImageChange}
                                id="username-success"
                                className={errorStyle(errors.image)}
                            />
                        </div>
                        {data.image ? (
                            <img
                                src={typeof data.image === "string" ? data.image : URL.createObjectURL(data.image)}
                                className="h-[200px] w-full bg-cover"
                            />
                        ) : null}
                    </section>

                    <div className="mb-5">
                        <label
                            htmlFor="username-error"
                            className="block mb-2 text-sm font-medium"
                        >
                            Description
                        </label>
                        <textarea
                            cols={10}
                            rows={5}
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className={errorStyle(errors.description)}
                        />
                    </div>
                    <div className="grid md:rid-cols-2 gap-4">
                        <section
                            onClick={(e) => handleAdd}
                            className={`flex items-center gap-4 justify-center ${processing ? "bg-green-500/50" : "bg-green-500"
                                }  text-white cursor-pointer font-bold text-xl p-2 rounded-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150`}
                        >
                            {processing ? (
                                <div role="status">
                                    <svg
                                        aria-hidden="true"
                                        className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                                        viewBox="0 0 100 101"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"
                                        />
                                    </svg>
                                </div>
                            ) : (
                                <button onClick={e => handleAdd(e)} disabled={processing} type="button">
                                    Save
                                </button>
                            )}
                        </section>
                        <button
                            onClick={onCloseModal}
                            type="button"
                            className="bg-red-500 mb-4 text-white font-bold text-xl p-2 rounded-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddModal;
