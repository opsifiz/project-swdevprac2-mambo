'use client'

import { useState } from "react";
import type { RestaurantType } from "@/types/types"
import { AddReserveCard } from "@/components/AddReserveCard";

export default function RestaurantClient({restaurants}:{restaurants:RestaurantType}) {
    const [showCard, setShowCard] = useState(false);
    return (
        <main className="flex flex-col justify-center items-center w-full flex-1 mt-5">

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

            <div className="relative flex flex-col w-[1500px] h-[600px] rounded-3xl overflow-hidden bg-white shadow-[0_0px_40px_rgba(0,0,0,0.7)]">
                <img src={restaurants.imgsrc} className=" rounded-3xl w-full h-[70%] object-cover border-2 border-white shadow-[0_20px_20px_rgba(0,0,0,0.6)]" />
                
                <div className="flex justify-start items-center flex-1 gap-15 [text-shadow:0_4px_20px_rgba(0,0,0,1)]">
                    <h1 className=" ml-30 pr-15 text-[60px] border-r-1 border-black">{restaurants.name}</h1>
                    <h1 className=" text-[30px]">{restaurants.address}</h1>
                </div>

                <button className="absolute bottom-2 right-2 w-50 h-18 text-white bg-black text-[35px] rounded-3xl [text-shadow:0_0_20px_white,0_0_60px_rgba(255,255,255,1),0_0_100px_rgba(255,255,255,0.8)] font-bold
                transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl"
                  onClick={(e) => {
                    setShowCard(true)
                  }}
                >
                    RESERVE
                </button>
                
            </div>
            {showCard && (
              <AddReserveCard restaurant={restaurants} closeCard={() => setShowCard(false)}/>
            )}
        </main>
    )
}