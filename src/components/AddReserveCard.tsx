'use client'
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { type Session } from "next-auth";

type CustomUser = NonNullable<Session['user']> & {
    telephone: string,
    sub: string,
    name: string,
    role: string,
    email: string,
} | undefined;

const AddReserveCard = ({id}:{id:string}) => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [date, setDate] = useState('');
    const {data:session} = useSession();
    console.log("User Session", session);
    const user = session?.user as CustomUser;
    const handleCreate = async () => {
        try {
            // console.log({ date, startTime, endTime })
            const payload = {
                startDateTime: `${date}T${startTime}:00`,
                endDateTime: `${date}T${endTime}:00`,
            }
            const resp = await fetch(`/api/restaurants/${id}/reservations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            
            const data = await resp.json();
            if(!resp.ok) {
                throw new Error(data.message || "Failed to reserve");
            }
            toast.success("Reserve success!", {position: 'top-center'})
        } catch(err) {
            console.log(err);
            toast.error("Failed to reserve", {
                position: 'top-center',
                description: err instanceof Error ? err.message : "Something went wrong.",
            });
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center h-dvh w-dvw">
            <div className="bg-white rounded-md p-4 shadow space-y-4">
                <h1 className="text-lg font-bold">Add Reservation</h1>
                <h1 className="font-bold">Reserve User</h1>
                <div>
                    <p>User: {user?.name}</p>
                    <p>Tel: {user?.telephone}</p>
                </div>
                <h1 className="font-bold">Reserve Data</h1>
                <div>
                    <span className="space-x-2">
                        <label htmlFor="reserve-date">Reserve Date: </label>
                        <input id='reserve-date' type='date' className="border" value={date} onChange={(e) => setDate(e.target.value)} required/>
                    </span>
                    <span className="space-x-2">
                        <label htmlFor="reserve-start">Start:</label>
                        <input id='reserve-start' type='time' className="border" value={startTime} onChange={(e) => setStartTime(e.target.value)} required/>
                    </span>
                    <span className="space-x-2">
                        <label htmlFor="reserve-end">End:</label>
                        <input id='reserve-end' type='time' className="border" value={endTime} onChange={(e) => setEndTime(e.target.value)} required/>
                    </span>
                </div>
                <div>
                    <Button onClick={handleCreate} variant={'outline'} className="w-full bg-black text-white">Reserve</Button>
                </div>
            </div>
        </div>
    )
}

export {AddReserveCard};