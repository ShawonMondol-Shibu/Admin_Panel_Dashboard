import Image from "next/image";
import React from "react";
import { teamType } from "./page";

export default function TeamCard({ name, title, image, email }: teamType) {
  return (
    <div className="w-72 grid gap-6 justify-center justify-items-center bg-white rounded-2xl py-10 shadow">
      <Image
        height={130}
        width={130}
        src={image}
        alt={title}
        className="m-auto rounded-full"
      />
      <div className="text-center">
        <h2 className="text-base font-bold">{name}</h2>
        <h3 className="text-sm font-semibold text-[#202224b4] mt-2">{title}</h3>
        <h3 className="text-sm font-normal text-[#202224b4] mt-4">{email}</h3>
      </div>
    </div>
  );
}
