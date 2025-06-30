import { Button } from "@/components/ui/button";

import PageTitle from "@/components/ui/page-title";
import React from "react";
import ContactCard from "./contact-card";

export default function Page() {
  return (
    <div>
      <div className="flex gap-10 items-center justify-between">
        <PageTitle>Contact</PageTitle>{" "}
        <Button variant={"default"} size={"lg"} className="bg-(--colorSkyBlue)">
          Add New Contact
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-10 items-center justify-center mt-10">
        <ContactCard/>
      </div>
    </div>
  );
}
