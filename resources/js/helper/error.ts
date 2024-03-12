import { TErrors } from "../types/type";

export const errorStyle = (errors: TErrors, error: string | number) => {
    const isError = error !== "" && error !== 0;

    return `rounded-tr-md rounded-br-md ${(Object.keys(errors).length > 0)
        ? "bg-red-300 border-red-300 placeholder:text-red-500"
        : "bg-gray-50 border border-gray-300 text-gray-900"
        }   flex-1 w-full text-sm p-2.5 focus:outline-none resize-none`;
};
