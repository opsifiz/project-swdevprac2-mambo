import Navbar from "@/components/Navbar"
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import ReservationClient from "./ReservationClient";

export default async function ReservationPage() {
console.log("inner")

    const h = await headers();
    const reservationsRes = await fetch(`${process.env.NEXTAUTH_URL}/api/reservations`, {
        cache: 'no-store',
        headers: {
            cookie: h.get("cookie") ?? "",
        }
    });
    if(!reservationsRes.ok) {
        notFound();
    }
    const reservationsData = await reservationsRes.json();
    const reservations = reservationsData.data;
    
    return (
        <div className="w-full min-h-dvh flex flex-col px-12">
            {/* <Navbar/> */}
            <ReservationClient initReservation={reservations}/>
        </div>
    )
}