import { Heart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface cardType {
  image: string;
  title: string;
  price: number;
  btnText: string;
}

export default function Card({ image, title, price, btnText }: cardType) {
  return (
    <div className="w-96 rounded-2xl  bg-white shadow m-auto">
      <Image
        height={320}
        width={380}
        src={image}
        alt={title}
        className="rounded-2xl"
      />

      <div className="p-8">
        <span className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#202224]">{title}</h2>
            <h3 className="text-base font-bold text-[var(--colorSkyBlue)]">
              ${price}
            </h3>
          </div>
          <Heart size={20} />
        </span>
        <span className="flex gap-2 items-center mt-3">
          <Star repeatCount={5} size={20} />({131})
        </span>
        <Button variant={"default"} className="bg-[#F5F6FA] text-black mt-5">
          {btnText}
        </Button>
      </div>
    </div>
  );
}
