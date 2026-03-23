'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

export default function Banner() {

  const covers = [
    '/images/teenoiGold.jpg',
  ];

   const [index, setIndex] = useState(0);
    const router = useRouter();

  return (
    <div className="relative w-[900px] h-[390px] my-0 mr-15 rounded-4xl">

      <Image onClick={()=>setIndex(index+1)}
        src={covers[index % 4]}
        alt="cover"
        fill
        className="object-cover rounded-4xl border-[2px] border-black"
      />

      {/* <h1 className="w-screen absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[3rem] text-center">
        where every event finds its venue
      </h1>

      <h4 className="w-[60vw] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[1.2rem] text-center">
        หนึ่งในปัจจัยสำคัญของงานเลี้ยงที่สมบูรณ์แบบ คือ การวางแผนจัดงานอย่างครอบคลุม
        ตั้งแต่การทำรายชื่อแขก คำนวณจำนวนแขกทั้งหมด รายชื่อเมนูอาหารคาว-หวาน
        ไปจนถึงการเลือกสถานที่จัดงานเลี้ยง
      </h4>

        <button className="absolute bottom-[10px] right-[10px] bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200" onClick={(e) => {e.stopPropagation(); router.push("/venue"); }}>
          Select Venue
        </button> */}

        <Box className="absolute inset-0 pointer-events-none">
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "30%",
              height: "100%",
              background: "linear-gradient(to right, rgba(0,0,0,0.7), transparent)",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              zIndex: 1,
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "30%",
              height: "100%",
              background: "linear-gradient(to left, rgba(0,0,0,0.7), transparent)",
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              zIndex: 1,
            }}
          />
      </Box>


    </div>
  );
}
