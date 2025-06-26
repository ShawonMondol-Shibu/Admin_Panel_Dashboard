import {
  Mail,
  Pencil,
  Send,
  Square,
  Star,
  Trash2,
  TriangleAlert,
} from "lucide-react";
import { TbMessageCircleCog } from "react-icons/tb";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import Messages from "./Messages";

interface itemType {
  name: string;
  messages: number;
  icon: React.ReactElement;
}

interface labelType {
  name: string;
  color: string;
}

export default function Page() {
  const myMails = [
    { name: "Inbox", messages: 1253, icon: <Mail size={16} /> },
    { name: "Starred", messages: 1253, icon: <Star size={16} /> },
    { name: "Sent", messages: 1253, icon: <Send size={16} /> },
    { name: "Draft", messages: 1253, icon: <Pencil size={16} /> },
    { name: "Spam", messages: 1253, icon: <TriangleAlert size={16} /> },
    {
      name: "Importpant",
      messages: 1253,
      icon: <TbMessageCircleCog size={16} />,
    },
    { name: "Bin", messages: 1253, icon: <Trash2 size={16} /> },
  ];

  const labels = [
    { name: "Primary", color: "#00B69B" },
    { name: "Social", color: "#5A8CFF" },
    { name: "Work", color: "#FD9A56" },
    { name: "Friends", color: "#D456FD" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold">Inbox</h1>
      <div className="mt-10 flex flex-nowrap gap-10 items-center">
        <div className="bg-white h-screen w-72 p-6 rounded-2xl shadow">
          <Button variant={'default'} className="w-full bg-[var(--colorSkyBlue)]">+ Compose</Button>
          {/* My Mails are here */}
          <div className="mt-5">
            <h2 className="text-base font-bold">My Email</h2>
            <div className="mt-4">
              {myMails.map((item: itemType, i: number) => (
                <Link
                  key={i}
                  href={""}
                  className="flex items-center justify-between text-[var(--colorSkyBlue)] hover:bg-[#4880FF4b] text-sm font-bold p-4 rounded-lg transition-all duration-200 ease-linear"
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </span>
                  {item.messages}
                </Link>
              ))}
            </div>
          </div>

          {/* Labels are here */}
          <div className="mt-5">
            <h2 className="text-base font-bold">Label</h2>
            <div className="py-4">
              {labels.map((label: labelType, i: number) => (
                <Link
                  key={i}
                  href={""}
                  className="p-4 flex items-center gap-2 text-sm font-bold hover:bg-[#4880FF4b] rounded-lg"
                >
                  <Square size={16} color={label.color} />
                  {label.name}
                </Link>
              ))}
            </div>
            <Button variant={'ghost'} size={'lg'}> + Create New Label</Button>
          </div>
        </div>

        {/* Messages Output */}
        <div className="h-screen flex-1/2 bg-white rounded-2xl shadow">
          <Messages />
        </div>
      </div>
    </div>
  );
}
