"use client";
import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import { Button } from "@/components/ui/button";

export interface teamType {
  name: string;
  title: string;
  image: string;
  email: string;
}

export default function Page() {
  const [items, setitems] = useState([]);
  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => setitems(data.teams));
  });
  return (
    <div>
      <span className="flex items-center justify-between  mb-8">
        <h1 className="text-3xl font-bold">Team</h1>
        <Button
          variant={"default"}
          size={"lg"}
          className="bg-[var(--colorSkyBlue)]"
        >
          Add New Member
        </Button>
      </span>
      <div className="flex flex-wrap items-center justify-center gap-10 w-full">
        {items.map((team: teamType, i: number) => (
          <TeamCard
            key={i}
            name={team.name}
            title={team.title}
            image={team.image}
            email={team.email}
          />
        ))}
      </div>
    </div>
  );
}
