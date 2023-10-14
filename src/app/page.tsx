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
            Információsbiztonsági oktatás
          </h1>
          <p className="text-xl italic">Kedves Kollegák!</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            sapien at augue fermentum consectetur. Sed euismod, nisl quis
            vestibulum consectetur, nunc nisi aliquam justo, id vestibulum eros
            velit at nisl. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Maecenas id est in erat
          </p>

          <section className="flex flex-col gap-2 space-y-4">
            <p>Az online tananyag az alábbi gombra kattintva érhető el.</p>

            <Link href="/learning-materials">
              <Button className="flex flex-row gap-2">
                <ScrollText className="h-4 w-4" /> Tananyag letöltése
              </Button>
            </Link>
          </section>

          <Start />
        </div>
      </main>
    </div>
  );
}
