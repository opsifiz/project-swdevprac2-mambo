import { notFound } from "next/navigation";
import { headers } from "next/headers";

export default async function RestaurantsPage({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const h = await headers();
    const restaurantsRes = await fetch(`${process.env.NEXTAUTH_URL}/api/restaurants/${id}`, {
        cache: 'no-store',
        headers: {
            cookie: h.get("cookie") ?? "",
        }
    });

    
    if(!restaurantsRes.ok) {
        console.log("restaurantsRes :",restaurantsRes)
        console.log("Incoming ID:", id);
        console.log("Type:", typeof id);
        notFound();
    }
    const restaurantsData = await restaurantsRes.json();
    const restaurants = restaurantsData.data;
    // console.log(reservationsRes);
    // console.log(reservations);

    return (
        <img src={restaurants.imgsrc} className="w-full h-200"></img>
    )
}