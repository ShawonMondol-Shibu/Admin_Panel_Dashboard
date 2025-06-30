import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HiMiniUsers } from "react-icons/hi2";
import React from "react";
import { ChartLine, History, TrendingUp } from "lucide-react";
import { RiBox3Fill } from "react-icons/ri";
import Chart from "@/components/shared/Chart";
import Deals from "@/components/shared/deals/Deals";
import Revenue from "@/components/shared/Revenue";

interface cardType {
  title: string;
  value: number;
  batch: React.ElementType;
  batchColor: string;
  batchBg: string;
  icon: React.ElementType;
}

export default function Page() {
  const cardData = [
    {
      title: " Total User",
      value: 40689,
      batch: HiMiniUsers,
      batchColor: "#8280FF",
      batchBg: "#8280ff3b",
      icon: TrendingUp,
    },
    {
      title: " Total Order",
      value: 10293,
      batch: RiBox3Fill,
      batchColor: "#FEC53D",
      batchBg: "#FEC53D3b",
      icon: TrendingUp,
    },
    {
      title: " Total Sales",
      value: 40689,
      batch: ChartLine,
      batchColor: "#4AD991",
      batchBg: "#4AD9913b",
      icon: TrendingUp,
    },
    {
      title: " Total Pending",
      value: 2040,
      batch: History,
      batchColor: "#FF0000",
      batchBg: "#FF00003b",
      icon: TrendingUp,
    },
  ];

  return (
    <main className="h-dvh w-full">
      {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div> */}

      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className="mt-10 flex flex-wrap flex-1/2 items-center justify-between gap-10">
        {cardData.map((card: cardType, i: number) => (
          <Card key={i} className="w-72 flex-1/2 lg:flex-none">
            <CardHeader className="relative">
              <CardTitle className="text-lg text-[var(--ring)]">
                {card.title}
              </CardTitle>
              <CardDescription
                style={{ background: card.batchBg }}
                className={`w-fit p-4 rounded-3xl absolute top-0 right-5`}
              >
                <card.batch color={card.batchColor} size={32} />
              </CardDescription>
            </CardHeader>
            <CardContent className="text-3xl font-bold">
              {card.value}
            </CardContent>
            <CardFooter className="text-lg font-semibold flex items-center gap-1">
              <span className="flex items-center gap-2 text-[#00B69B]">
                <card.icon />
                8.5%
              </span>{" "}
              Up from yesterday
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="p-10 bg-white rounded-2xl shadow mt-10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold">Sales Details</h2>
          <select name="" id="" className="border py-2 px-4 rounded-md">
            <option value="october">October</option>
          </select>
        </div>
        <Chart />
      </div>

      <Deals />
      <Revenue />
    </main>
  );
}
