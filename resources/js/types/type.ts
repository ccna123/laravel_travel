import { IBookingInfo, IErrors, ITour, ITourDetail } from "./interface"

export type TTour = {
    id: number;
    departure_date: string;
    image: string | Blob | MediaSource | null;
    place_name_en: string
    place_name_jp: string;
    price: number | 0;
    location: string;
    description: string;
}

export type TLink = {
    active: boolean;
    label: string;
    url: string;
}

export type TBookingInfo = {
    customer_name: string,
    customer_email: string,
    customer_address: string,
    customer_phone: string,
    destination: string,
    number_of_stay: number | 0,
    number_of_people: number | 0,
    number_of_adult: number | 0,
    number_of_children: number | 0,
    transportation: string,
    total: number

}

export type TTours = {
    data: TTour[],
    links: TLink[]
}

export type TErrors = Omit<TBookingInfo, "destination" | "total" | "status">

export type TCustomerInfo = Omit<TBookingInfo, "destination" | "number_of_stay" | "number_of_people" | "number_of_adult" | "number_of_children" | "transportation">

export type TBookingDetailInfo = {
    tour: Omit<TBookingInfo, "customer_name" | "customer_email" | "customer_phone" | "customer_address" | "destination">,
    destinationPrice?: number,
    total?: number | 0,
    calculateNumberOfStay: number,
    calculateNumberOfAdult: number,
    calculateNumberOfChildren: number,
    calculateTransportationFee: number,
    calculateTotal: number,
}

export type TBookingDetail = TBookingDetailInfo & {
    total: number | 0,

}

export enum bookingStatusEnum {
    "Booked" = "Booked",
    "Cancel" = "Cancel",
}

export type bookingStatusType = {
    status: string
}

export type ActionTypes = {
    handleToggleModal?: () => void,
    onAdd?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onImageChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export type Order = {
    place: ITour,
    errors: IErrors,
    data: IBookingInfo,
    tourDetail: ITourDetail,
    calculateNumberOfStay: number,
    calculateNumberOfAdult: number,
    calculateNumberOfChildren: number,
    calculateTransportationFee: number,
    calculateTotal: number,
}
