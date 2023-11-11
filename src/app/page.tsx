import { Button } from "@/components/ui/button";
import { ScrollText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Start } from "../components/Start";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <main className="max-w-5xl mx-auto flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <Image
            className="flex-grow"
            src="/security.jpg"
            alt="security background"
            width={1200}
            height={600}
          />
        </div>

        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-4xl mb-4 text-center font-bold">
            Információbiztonsági oktatás
          </h1>
          <p>Kedves Kolléga!</p>

          <p>
            Kérem, hogy a mellékelt Információbiztonsági oktatási anyagot
            letölteni, majd a tananyaghoz kapcsolódó teszt kérdéssort kitölteni
            szíveskedj! Sikeres teszt esetén (80%) az oktatásról igazolás
            készül, melyet kinyomtatva és aláírva a HR részére kérem megküldeni!
            Sikertelen teszt esetén a teszt ismételten kitölthető.
          </p>

          <p>Együttműködéseteket megköszönve,</p>

          <p>
            Üdvözlettel: <br />
            Sárffy Vera
            <br />
            HR
          </p>

          <section className="flex flex-col gap-2 space-y-4">
            <p>Az online tananyag az alábbi gombra kattintva érhető el.</p>

            <Link href="/ib_alapkepzes.pdf" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Button className="flex flex-row gap-2">
                  <ScrollText className="h-4 w-4" /> Tananyag letöltése
                </Button>
              </a>
            </Link>
          </section>

          <Start />
        </div>
      </main>
    </div>
  );
}
