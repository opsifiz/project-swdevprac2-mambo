import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { ReserveItemContainer, ReserveItemContent, ReserveItemHeader } from "@/components/ReserveItem";
import Link from "next/link";
import { Box } from "@mui/material";
import Card from "@/components/ui/Card";

export default async function RestaurantsPage() {
    const h = await headers();
    const restaurantsRes = await fetch(`${process.env.NEXTAUTH_URL}/api/restaurants`, {
        cache: 'no-store',
        headers: {
            cookie: h.get("cookie") ?? "",
        }
    });
    if(!restaurantsRes.ok) {
        notFound();
    }
    const restaurantsData = await restaurantsRes.json();
    const restaurants = restaurantsData.data;
    // console.log(reservationsRes);
    // console.log(reservations);

    return (
        <div className="relative flex justify-center mt-20">

        <div className="fixed inset-0 -z-10 pointer-events-none">
          <img
            src="/images/BG2.png"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

        </div>

            <Box className="fixed inset-x-0 top-[150px] bottom-0 flex justify-center">

            <div className="absolute max-w-5xl w-full h-154 justify-center py-8 px-8 z-30 mr-[600px] mt-[15px] overflow-auto bg-white rounded-3xl border-2 border-black  no-scrollbar">
                <Box className="grid grid-cols-2 justify-center gap-10 w-full">
                {restaurants.map((it: any) => (
                    <Link href={`/restaurants/${it._id}`} key={it._id}>
                    <Card imgSrc={it.imgsrc} venueName={it.name} />
                    </Link>
                ))}
                </Box>
            </div>

            <img
                src="/images/Review.png"
                className="absolute w-[500px] h-auto z-10 ml-[1000px] mt-[-25px]"
            />

            <img
                src="/images/BG.png"
                className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
            />

            <div
                className="absolute inset-0 w-full h-full z-20 pointer-events-none"
                style={{ background: `linear-gradient(to top, #cebba87a, #ffffff00)` }}
            />

            </Box>

        </div>
    )
}