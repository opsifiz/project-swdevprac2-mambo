import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { ReserveItemContainer, ReserveItemContent, ReserveItemHeader } from "@/components/ReserveItem";
import Link from "next/link";

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
    // console.log(reservationsRes);
    // console.log(reservations);
    
    return (
        <div className="w-full min-h-dvh flex flex-col px-12"> 
            <div className="max-w-7xl mx-auto py-8 w-full space-y-4">
                <h1 className="text-2xl font-bold">My Reservations</h1>
                <div className="grid grid-cols-2 gap-4 w-full">
                    {reservations.map((it:any) => (
                        <Link href={`/reservations/${it._id}`} key={it._id}>
                            <ReserveItemContainer>
                                <ReserveItemHeader>{it.restaurantName}</ReserveItemHeader>
                                <ReserveItemContent>{it.userName}</ReserveItemContent>
                                <ReserveItemContent>{it.startDateTime.toString()} - {it.endDateTime.toString()}</ReserveItemContent>
                            </ReserveItemContainer>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}