"use client";
import { Button } from "@/components/ui/button";

import PageTitle from "@/components/ui/page-title";
import React, { useEffect, useState } from "react";
import ContactCard, { cardType } from "./contact-card";

export default function Page() {
  const [contacts, setContacts] = useState<cardType[]>([]);
  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => setContacts(data.contacts));
  }, []);
  return (
    <div>
      <div className="flex gap-10 items-center justify-between">
        <PageTitle>Contact</PageTitle>{" "}
        <Button
          variant={"default"}
          size={"lg"}
          className="bg-[var(--colorSkyBlue)]"
        >
          Add New Contact
        </Button>
      </div>
      <div className="2xl:grid grid-cols-3 flex flex-wrap gap-10 items-center justify-center mt-10">
        {contacts.map((contact: cardType) => (
          <ContactCard
            key={contact.email}
            image={contact.image}
            name={contact.name}
            email={contact.email}
          />
        ))}
      </div>
    </div>
  );
}
