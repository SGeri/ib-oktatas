"use client";

import { Finished } from "@/components/Finished";
import { Button } from "@/components/ui/button";
import { useTest } from "@/hooks/useTest";

const MIN_PASS_PERCENTAGE = 80;

export default function Home() {
  const {
    currentQuestion,
    currentQuestionIndex,
    submitAnswer,
    questions,
    answeredQuestions,
    correctAnswers,
  } = useTest();

  if (questions.length === answeredQuestions)
    return (
      <Finished
        correctAnswers={correctAnswers}
        passingPercentage={MIN_PASS_PERCENTAGE}
        totalQuestions={questions.length}
      />
    );

  return (
    <div className="container mx-auto p-6">
      <div className="text-center">
        <h2 className="text-2xl mb-4 bold">Teszt</h2>
        <p className="text-lg font-bold">
          {currentQuestionIndex + 1} / {questions.length} kérdés
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-lg">{currentQuestion.question}</p>

        <div className="flex flex-col gap-2">
          {currentQuestion.answers.map((answer, index) => (
            <Button key={index} onClick={() => submitAnswer(index)}>
              {answer}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
