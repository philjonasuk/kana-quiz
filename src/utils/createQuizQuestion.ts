import {QuizQuestion} from '../data/types';

export const createQuizQuestion = (
  quizIndex: number,
  shuffledKanaIds: string[]
): QuizQuestion => {
  const answerId = shuffledKanaIds[quizIndex];
  const questionIds: string[] = [];

  while (questionIds.length < 4) {
    let randomId = questionIds[Math.floor(Math.random() * questionIds.length)];
    while (randomId === answerId) {
      randomId = questionIds[Math.floor(Math.random() * questionIds.length)];
    }
    questionIds.push(randomId);
  }
  return {
    answerId,
    questionIds,
  };
};
