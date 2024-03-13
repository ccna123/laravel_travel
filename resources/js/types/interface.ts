export interface ITour {
    id?: number;
    departure_date?: string;
    image?: string | Blob | MediaSource | null;
    place_name_en?: string
    place_name_jp?: string;
    price?: number | 0;
    location?: string;
    description?: string;
}

export interface IBookingInfo {
    customer_name?: string | undefined,
    customer_email?: string | undefined,
    customer_address?: string | undefined,
    customer_phone?: string | undefined,
    destination?: string | undefined,
    number_of_stay?: number | 0,
    number_of_people?: number | 0,
    number_of_adult?: number | 0,
    number_of_children?: number | 0,
    transportation?: string | undefined,
    total?: number | 0,
    status?: "Booked" | "Cancel"
}

export interface ITourDetail {
    number_of_stay: number;
    number_of_adult: number;
    number_of_children: number;
    transportation: string
}

export interface ITours {
    data: ITour[],
    links: any

}

export interface IErrors extends ITour, IBookingInfo { }