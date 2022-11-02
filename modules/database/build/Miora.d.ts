import { DefaultModelType, Id } from "model-types";
import { Location } from "geo-types";
import { Image } from "os-types";
export interface User extends DefaultModelType {
    username: string;
    email?: string;
    phone?: string;
    encryptedPassword: string;
    hostId?: Id;
}
export interface Host extends DefaultModelType {
    userId: Id;
    listingIds: Id[];
}
export declare type Currency = "euro" | "usd";
export declare type ListingType = "private" | "shared" | "single-bed" | "double-bed";
export interface Reservation extends DefaultModelType {
    userId: Id;
    /** unix timestamp */
    checkinAt: number;
    checkoutAt: number;
    listingId: Id;
    paid: number;
    toPay: number;
    totalPrice: number;
    currency: Currency;
}
export interface Listing extends DefaultModelType {
    hostId: Id;
    location: Location;
    pictures: Image[];
    title: string;
    description: string;
    pricePerNight: number;
    currency: Currency;
    type: ListingType;
}
export declare const createUser: (input: {
    username: string;
    password: string;
}) => void;
//# sourceMappingURL=Miora.d.ts.map