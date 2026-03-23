import Card from '@/components/ui/card';
import Link from "next/link"
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

type RatingAction = 
  | { type: 'SET_RATING'; venueName: string; rating: number }
  | { type: 'REMOVE_RATING'; venueName: string };

const ratingReducer = (state: Map<string, number>, action: RatingAction) => {
  switch (action.type) {
    case 'SET_RATING':
      return new Map(state).set(action.venueName, action.rating);

    case 'REMOVE_RATING':
      const newState = new Map(state);
      newState.delete(action.venueName);
      return newState;

    default:
      return state;
  }
};

export default async function CardPanel() {

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
    <div className="fixed left-0 bottom-0 w-full">

  <div className="[&::-webkit-scrollbar]:hidden flex flex-nowrap p-10 gap-10 overflow-x-auto ">
    {restaurants.map((it: any) => (
  <Link key={it._id} href={`/restaurants/${it._id}`} className="flex-shrink-0">
    <Card
      imgSrc={it.imgsrc}
      venueName={it.name}
    />
  </Link>
))}
  </div>

</div>

  );
}
