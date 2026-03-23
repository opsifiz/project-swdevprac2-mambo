import mongoose from "mongoose";

export type UserType = {
    id: string,
    name: string,
    sub: string,
    email: string,
    role: string,
    telephone: string,
}

export type ReservationType = {
    startDateTime: Date
    endDateTime: Date
    user: string
    restaurant: string
}