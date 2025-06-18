import Image from "next/image";
import React from "react";

export default function TeamCard() {
  return (
    <div className="w-72 grid gap-6 justify-center justify-items-center bg-white rounded-2xl py-10 shadow">
      <Image height={130} width={130} src={"/images/admin.png"} alt="" className="m-auto rounded-full"/>
      <div className="text-center">

      <h2 className="text-base font-bold">Jason Price</h2>
      <h3 className="text-sm font-semibold text-[#202224b4] mt-2">Admin</h3>
      <h3 className="text-sm font-normal text-[#202224b4] mt-4">janick_parisian@yahoo.com</h3>
      </div>
    </div>
  );
}
