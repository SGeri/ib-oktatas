export type TestQuestion = {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
};

export type GeneratePdfRequest = {
  name: string;
};

export type GeneratePdfResponse = {
  test: string;
};
