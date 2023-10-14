import { TEST_QUESTIONS } from "@/lib/constants";
import { shuffleArray } from "@/lib/utils";
import { useMemo, useState } from "react";

export function useTest() {
  const questions = useMemo(() => shuffleArray(TEST_QUESTIONS), []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const submitAnswer = (answerIndex: number) => {
    if (answerIndex === questions[currentQuestionIndex].correctAnswerIndex) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setAnsweredQuestions(answeredQuestions + 1);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return {
    currentQuestion: questions[currentQuestionIndex],
    currentQuestionIndex,
    questions,
    submitAnswer,
    answeredQuestions,
    correctAnswers,
  };
}
