export { default } from 'next-auth/middleware';

export const config = {
  matcher: ["/api/reservations/:path*", "/api/restaurants/:path*/reservations/:path*"],
};