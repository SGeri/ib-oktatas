import { TestQuestion } from "./types";

export const TEST_QUESTIONS: TestQuestion[] = [
  {
    question:
      "A vezetői szerepvállalás és elkötelezettsége az ISMS kialakítása, bevezetése, működtetése, figyelemmel kisérése, átvizsgálása, fenntartása és fejlesztése iránt:",
    answers: [
      "célok kitűzése a szervezet releváns funkciója, folyamat és szintje",
      "a szervezeti egységek kijelölése",
      "az információvédelmi célok teljesítése és az információvédelmi szabályzatnak való megfelelés fontosságának, a jogszabályok szerinti felelősségeknek, valamint a folyamatos fejlesztés szükségességének kinyilvánításával a szervezet felé",
    ],
    correctAnswerIndex: 2,
  },
  {
    question:
      "A szervezetnek biztosítania kell azt is, hogy az érintett dolgozók tudatában legyenek…",
    answers: [
      "az információbiztonsággal kapcsolatos tevékenységük szerepével és fontosságával, valamint azzal, hogy miképpen járulnak hozzá az ISMS céljainak eléréséhez",
      "az integrált politikával",
      "az összes jogszabályi követelménnyel",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Kinek kell azonnal és haladéktalanul jelenteni az incidenseket?",
    answers: [
      "A mellettem ülő kollégámnak, ő majd intézi",
      "Nem kell jelenteni",
      "Ügyvezetőnek",
      "az Incidens managernek a jegykezelő felületen, vagy annak elérhetetlensége esetén email-en vagy telefonon",
    ],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Facebookon/Messengeren ír egy kedves lány/fiú, elkezdtek beszélgetni, jól alakulnak a dolgok, majd elkezd érdeklődni a munkád után. Mikor fogsz gyanút, hogy nem is te érdekled őt, hanem a munkahelyed ügyei, bizalmas információi?",
    answers: [
      "Megkérdezi mivel foglalkozom és hogy hol dolgozom. Majd elkezdi érdekelni, hogy épp milyen feladaton dolgozom, azt melyik cégnek, illetve hogyan épül fel nálunk a hálózat, milyen szoftvereken és melyik verziókon dolgozunk. Érdeklődik afelől is, hogy hol található az iroda és hogyan lehet oda bemenni",
      "Megkérdezi hol dolgozom, és hogy szeretem-e a munkámat. Mikor szoktam munkába menni, mettől-meddig dolgozom",
      "Megkérdezi, hogy hol dolgozom és mennyire sokat dolgozom, illetve azt is, hogy hétvégén szoktam-e dolgozni",
      "Megkérdezi, hogy melyik cégnek dolgozom és hol az iroda, illetve afelől is érdeklődik, hogy hétvégente szoktam-e dolgozni",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Melyek az informatikai biztonság 3 fő alapelvei?",
    answers: [
      "rendelkezésre állás, sértetlenség, hitelesség",
      "rendelkezésre állás, hitelesség, hatékonyság",
      "sértetlenség, rendelkezésre állás, bizalmasság",
      "bizalmasság, sértetlenség, hitelesség",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Megoszthatom-e a munkahelyi eszközömet:",
    answers: [
      "Csakis informatikai ismeretekkel rendelkező ismerősömmel",
      "Igen, bárkivel",
      "Igen, a többi alkalmazottal",
      "Nem",
    ],
    correctAnswerIndex: 3,
  },
];
