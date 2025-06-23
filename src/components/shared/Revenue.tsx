"use client";
import React from "react";
import {
  Area,
  AreaChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const revenue = [
  { profit: 70, sale: 35, name: "5k" },
  { profit: 35, sale: 30, name: "10k" },
  { profit: 30, sale: 55, name: "15k" },
  { profit: 58, sale: 34, name: "20k" },
  { profit: 32, sale: 90, name: "25k" },
  { profit: 90, sale: 38, name: "30k" },
  { profit: 20, sale: 68, name: "35k" },
  { profit: 20, sale: 36, name: "40k" },
  { profit: 20, sale: 58, name: "45k" },
  { profit: 20, sale: 0, name: "50k" },
  { profit: 20, sale: 0, name: "55k" },
  { profit: 20, sale: 0, name: "60k" },
];

export default function Revenue() {
  return (
    <div className="p-10 bg-white mt-10 shadow rounded-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-10">Revenue</h1>
        <select name="" id="" className="border rounded-md py-2 px-4">
          <option value="">October</option>
        </select>
      </div>

      <ResponsiveContainer width={"100%"} height={478}>
        <AreaChart
          width={900}
          height={500}
          data={revenue}
          margin={{ right: 30 }}
        >
          <XAxis dataKey={"name"} />
          <YAxis />
          <Area
            dataKey={"profit"}
            type={"monotone"}
            stroke="#DBA5FF"
            fill="#DBA5FF"
          />
          <Area
            dataKey={"sale"}
            type={"monotone"}
            stroke="#FF8F6D"
            fill="#FF8F6D"
          />
          <Tooltip />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
