'use client'
import Container from "@/components/ui/container";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Reserve = {
    restaurantName: string,
    startDateTime: string,
    endDateTime: string,
    restaurantAddress: string,
    openTime: string,
    closeTime: string,
}

function formatDateInput(value: string) {
    const d = new Date(value)
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, "0")
    const day = String(d.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
}

function formatTimeInput(value: string) {
    const d = new Date(value)
    const hours = String(d.getHours()).padStart(2, "0")
    const minutes = String(d.getMinutes()).padStart(2, "0")
    return `${hours}:${minutes}`
}


export default function EditReserve({id, initReservation}:{id: string, initReservation:Reserve}) {
    const [reservation, setReservation] = useState(initReservation);
    const [startTime, setStartTime] = useState(formatTimeInput(initReservation.startDateTime));
    const [endTime, setEndTime] = useState(formatTimeInput(initReservation.endDateTime));
    const [date, setDate] = useState(formatDateInput(initReservation.endDateTime));
    console.log(reservation);
    const handleSave = async () => {
        try {
            // console.log({ date, startTime, endTime })
            const payload = {
                startDateTime: `${date}T${startTime}:00`,
                endDateTime: `${date}T${endTime}:00`,
            }
            const resp = await fetch(`/api/reservations/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            
            const data = await resp.json();
            if(!resp.ok) {
                throw new Error(data.message || "Failed to save reservation");
            }
            toast.success("Reservation Saved!", {position: 'top-center'})
        } catch(err) {
            console.log(err);
            toast.error("Failed to save reservation.", {
                position: 'top-center',
                description: err instanceof Error ? err.message : "Something went wrong.",
            });
        }
    }
    
    return (
        <Container className="sm:col-span-2 bg-white ">
            <p>Restaurant Name: {reservation.restaurantName ?? "Unknown"}</p>
            <p>Reserved Address: {reservation.restaurantAddress ?? "Unknown"}</p>
            <p>Available Time: {reservation.openTime ?? "Unknown"} - {reservation.closeTime ?? "Unknown"}</p>
            <p>User Reserved Time:</p>
            <span className="space-x-2">
                <label htmlFor="reserve-date">Reserve Date: </label>
                <input id='reserve-date' type='date' className="border" value={date} onChange={(e) => setDate(e.target.value)}/>
            </span>
            <span className="space-x-2">
                <label htmlFor="reserve-start">Start:</label>
                <input id='reserve-start' type='time' className="border" value={startTime} onChange={(e) => setStartTime(e.target.value)}/>
            </span>
            <span className="space-x-2">
                <label htmlFor="reserve-end">End:</label>
                <input id='reserve-end' type='time' className="border" value={endTime} onChange={(e) => setEndTime(e.target.value)}/>
            </span>
            <div className="flex justify-end ">
                <Button onClick={() => {
                    handleSave()
                }}>Save</Button>
            </div>
        </Container>
    )
}