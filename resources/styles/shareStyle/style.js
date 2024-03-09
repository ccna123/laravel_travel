export const btnStyle = (type) => {
    switch (type) {
        case "book":
            return "w-full font-bold bg-green-500 p-2 rounded-md text-white hover:cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150";
        case "edit":
            return "w-full font-bold bg-blue-500 p-2 rounded-md text-white hover:cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150";
        case "delete":
            return "w-full font-bold bg-red-500 p-2 rounded-md text-white hover:cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150";
        case "back":
            return "w-full font-bold bg-orange-500 p-2 rounded-md text-white hover:cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150";
        case "filter":
            return "w-full font-bold bg-purple-500 p-2 rounded-md text-white hover:cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150";
        case "cancel":
            return "w-full font-bold bg-red-500 p-2 rounded-md text-white hover:cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150";

        default:
            break;
    }
};
