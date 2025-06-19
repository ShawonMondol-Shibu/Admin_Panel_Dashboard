import React from "react";
import PriceCard from "./PriceCard";

export default function Page() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-10">Pricing</h2>
      <div className="flex items-center justify-center gap-10">
        {Array.from({ length: 3 }).map((i, _) => (
          <PriceCard key={_} />
        ))}
      </div>
    </div>
  );
}
