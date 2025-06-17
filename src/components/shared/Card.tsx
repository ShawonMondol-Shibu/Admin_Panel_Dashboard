import { Heart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";



export default function Card() {
  return (
    <div className="w-96 rounded-2xl  bg-white shadow">
      <Image height={320} width={380}  src={"/images/Bitmap.png"} alt="" />

      <div className="p-8">

      <span className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#202224]">Apple Watch Serice 4</h2>
          <h3 className="text-base font-bold">$120.00</h3>
        </div>
        <Heart />
      </span>

      <span className="flex gap-2 items-center">
        <Star />({131})
      </span>
      <Button variant={"default"} className="bg-[#F5F6FA] text-black">
        Edit Product
      </Button>
      </div>
    </div>
  );
}
