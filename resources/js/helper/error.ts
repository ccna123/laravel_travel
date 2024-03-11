export const errorStyle = (error?: string | number | Blob | MediaSource | null | undefined) => {
    return `rounded-tr-md rounded-br-md ${error === ""
        ? "bg-red-300 border-red-300 placeholder:text-red-500"
        : "bg-gray-50 border border-gray-300 text-gray-900"
        }   flex-1 w-full text-sm p-2.5 focus:outline-none resize-none`;
};
