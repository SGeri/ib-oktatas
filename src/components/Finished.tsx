import { GeneratePdfRequest } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Button } from "./ui/button";

type FinishedProps = {
  correctAnswers: number;
  totalQuestions: number;
  passingPercentage: number;
};

export function Finished({
  correctAnswers,
  totalQuestions,
  passingPercentage,
}: FinishedProps) {
  const [error, setError] = useState("");

  const searchParams = useSearchParams();

  const percentage = useMemo(
    () => Math.round((correctAnswers / totalQuestions) * 100),
    [correctAnswers, totalQuestions]
  );
  const hasPassed = useMemo(
    () => percentage >= passingPercentage,
    [percentage, passingPercentage]
  );

  const handleDownload = async () => {
    const name = searchParams.get("name");

    if (!name)
      return setError(
        "Nem található a név paraméter, kérlek frissíts rá az oldalra!"
      );

    const body: GeneratePdfRequest = {
      name,
    };

    const res = await fetch("/api/generate-pdf", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => ({
        arrayBuffer: res.arrayBuffer(),
        fileName: res.headers.get("X-File-Name"),
      }))
      .catch((err) => setError(err.message));

    if (!res) return setError("Nem sikerült a pdf generálása!");

    const { arrayBuffer: arrayBufferPromise, fileName } = res;
    const arrayBuffer = await arrayBufferPromise;

    const blob = new Blob([arrayBuffer], {
      type: "application/pdf",
    });
    const url = URL.createObjectURL(blob) + (fileName && `#${fileName}`);
    window.open(url, "_blank");
  };

  return (
    <div className="container mx-auto p-6 flex flex-col gap-4 justify-center items-center">
      <div className="text-center">
        <h2 className="text-2xl mb-4 bold">Teszteredmény</h2>
        <p className="text-lg font-bold">Elért eredmény: {percentage}%</p>
        <p className="text-base font-light">
          ({correctAnswers} / {totalQuestions})
        </p>
      </div>

      {!hasPassed ? (
        <div className="flex flex-col gap-2">
          <p>
            Ezúttal a teszt nem sikerült elég jól, kérjük próbáld meg újra és
            olvasd át figyelmesen az oktatási anyagot!
          </p>

          <Button onClick={() => window.location.reload()}>
            Teszt újrakezdés
          </Button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="mb-4">
            Gratulálunk! A tesztet sikeresen teljesítetted, kattints az alábbi
            gombra, hogy letöltsd az IB oktatáson való részvétel igazolását!
          </p>

          <Button onClick={handleDownload}>Jegyzőkönyv letöltése</Button>
        </div>
      )}

      {error && <p className="text-red-500">Az alábbi hiba történt: {error}</p>}
    </div>
  );
}
