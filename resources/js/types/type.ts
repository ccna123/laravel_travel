import { IBookingInfo, IErrors, ITour, ITourDetail } from "./interface"

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
