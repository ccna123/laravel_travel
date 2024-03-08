export const className = (error) => {
    return `rounded-md ${
        error
            ? "bg-red-300 border-red-300 placeholder:text-red-500"
            : "bg-gray-50 border border-gray-300 text-gray-900"
    }   flex-1 min-w-0 w-full text-sm p-2.5 focus:outline-none resize-none`;
};
