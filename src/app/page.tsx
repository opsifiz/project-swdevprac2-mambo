import Logo from "@/components/Logo";
import Banner from "@/components/ui/Banner";
import CardPanel from "@/components/ui/CardPanel";
import Light from "@/components/ui/Light"
import { notFound } from "next/navigation";
import { headers } from "next/headers";

export default async function Home() {

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
    <div className="flex justify-end">

      <main >
        <div className="fixed inset-0 -z-10">
          <img
            src="/images/BG2.png"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <img
            src="/images/BG.png"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          
          <div
            className="absolute inset-0 w-full h-full z-20 bottom-0"
            style={{  
              background: `linear-gradient(to top, #cebba89a, #ffffff00)`
            }}
          />
        </div>

      <Light/>
      <Logo></Logo>
      <Banner/>
      <CardPanel/>

      </main>
    </div>
  );
}
