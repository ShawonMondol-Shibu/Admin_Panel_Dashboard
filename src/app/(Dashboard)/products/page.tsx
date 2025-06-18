import Card from "@/components/shared/Card";
import Slider from "@/components/shared/Slider";
import React from "react";

export default function Page() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <Slider />
      <div className="flex flex-wrap justify-center items-center gap-10 my-10 overflow-x-scroll ">
        {items.map((item, i) => (
          <Card
            key={i}
            image="/images/watch_black.png"
            title="Apple Watch Serice 4"
            price={120.0}
            btnText="Edit Order"
          />
        ))}
      </div>
    </div>
  );
}
