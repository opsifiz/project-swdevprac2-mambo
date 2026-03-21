
import { connectDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import Reservation from "@/models/Reservation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import type { UserType } from "@/app/types/types";

export async function GET(req: NextRequest, {params}:{params: Promise<{id: string}>}) {
    try {
        const session = await getServerSession(authOptions);
        const user = session?.user as UserType|undefined;
        if(!user) {
            return NextResponse.json({
                success: false, 
                message: 'Not authorized',
            }, {
                status: 401
            });
        }
        await connectDB();
        
        const { id } = await params;
        const reservation = await Reservation.findById(id).populate({
            path: 'restaurant',
            select: 'name address tel'
        });
        if(!reservation) {
            return NextResponse.json({
                success: false, 
                message: `No reservation with the id of ${id}`
            }, {
                status: 404
            });
        }

        if(reservation.user.toString()!==user.id && user.role !== 'admin') {
            return NextResponse.json({
                success: false, 
                message: `No reservation with the id of ${id}`
            }, {
                status: 404
            });
        }

        return NextResponse.json({
            success: true, 
            data: reservation
        }, {
            status: 200
        })
    } catch(err) {
        console.log(err);
        NextResponse.json({
            success: false, 
            message: 'Cannot find Reservation'
        }, {
            status: 500
        });
    }
}