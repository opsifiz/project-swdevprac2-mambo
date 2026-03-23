import Navbar from "@/components/Navbar"
import Container from "@/components/ui/container"
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import EditReserve from "./EditReserve";

export default async function ReservationPage({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const h = await headers();
    const reservationRes = await fetch(`${process.env.NEXTAUTH_URL}/api/reservations/${id}`, {
            cache: 'no-store',
            headers: {
                cookie: h.get("cookie") ?? "",
            },
        }
    );
    console.log(reservationRes);
    if(!reservationRes.ok) {
        notFound();
    }
    const reservationData = await reservationRes.json();
    const reservation = reservationData.data;
    console.log(reservation);
    
    return (
        <div className="w-full min-h-dvh flex flex-col px-12">
            <div className="flex-1 py-8 max-w-7xl mx-auto w-full">
                <h1 className="text-2xl font-bold">Reservation</h1>
                <div className="grid grid-cols-3 gap-4">
                    <Container className="col-span-1">
                        <p>Reserved User: {reservation.userName ?? "Unknown"}</p>
                        <p>User Email: {reservation.userEmail ?? "Unknown"}</p>
                        <p>User Tel: {reservation.userTel ?? "Unknown"}</p>
                    </Container>
                    <EditReserve id={id} initReservation={reservation}/>
                </div>
            </div>
        </div>
    )
}