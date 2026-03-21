import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { getUserFromRequest } from "@/lib/auth";
import Reservation from "@/models/Reservation";

export async function GET(req: NextRequest) {
    try {
        const user = await getUserFromRequest(req);
        if(!user) {
            return NextResponse.json({
                success: false, 
                message: 'Not authorized',
            }, {
                status: 401
            });
        }
        await connectDB();

        let query;
    
        if(user.role !== 'admin') {
            query = Reservation.find({user: user.id}).populate({
                path: 'restaurant',
                select: 'name address tel'
            })
        } else {
            query = Reservation.find({}).populate({
                path: 'restaurant',
                select: 'name address tel'
            });
        }
    
        const reservations = await query;

        return NextResponse.json({
            success: true,
            count: reservations.length,
            data: reservations
        }, {
            status: 200
        })
    } catch(err) {
        return NextResponse.json({
            success: false, 
            message: 'Cannot find Reservation',
        }, {
            status: 500
        })
    }
}