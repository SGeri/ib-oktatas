"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

const TEST_URL = "/test";

export function Start() {
  const [name, setName] = useState("");

  const disabled = !name;

  return (
    <section className="flex flex-row gap-2">
      <Input
        type="text"
        placeholder="Kérlek add meg a neved"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Link href={disabled ? "#" : `${TEST_URL}?name=${name}`} passHref>
        <Button className="flex flex-row gap-2" disabled={disabled}>
          Teszt megkezdése
        </Button>
      </Link>
    </section>
  );
}
