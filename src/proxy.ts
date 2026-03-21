import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

type JWTPayload = {
    id: string, 
    role?: string,
};

async function verifyToken(token: string) {
    const secret = process.env.JWT_SECRET;
    if(!secret) {
        throw new Error("JWT_SECRET is not defined");
    }
    const secretKey = new TextEncoder().encode(secret);
    const { payload } = await jwtVerify(token, secretKey);

    return payload as unknown as JWTPayload;
}

export async function proxy(req: NextRequest) {
    const authHeader = req.headers.get("authorization");

    let token: string|null = null;
    if(authHeader?.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
    }
    if(!token || token==='null') {
        return NextResponse.json({
            success: false,
            message: 'Not authorized to access this route',
        }, {
            status: 400
        })
    }

    try {
        const decoded = await verifyToken(token);
        const requestHeaders = new Headers(req.headers);
        requestHeaders.set('user-id', decoded.id);
        if(decoded.role) {
            requestHeaders.set('user-role', decoded.role);
        }

        return NextResponse.next({
            request: {
                headers: requestHeaders,
            }
        });
    } catch(err) {
        return NextResponse.json({
            success: false,
            message: 'Not authorized to access this route',
        }, {
            status: 401
        })
    }
}

export const config = {
  matcher: ["/api/reservations/:path*", "/api/restaurants/:path*/reservations/:path*"],
};