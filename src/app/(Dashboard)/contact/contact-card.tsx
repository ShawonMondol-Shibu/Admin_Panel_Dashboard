"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface cardType {
  image: string;
  name: string;
  email: string;
}

export default function ContactCard({ image, name, email }: cardType) {
  return (
    <Card className="w-[360px] pt-0">
      <Image src={image} width={360} height={278} alt={name} />
      <CardContent>
        <h2>{name}</h2>
        <p>{email}</p>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"} size={"lg"}>
          <Mail />
          <span>Message</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
