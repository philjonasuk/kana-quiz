import {QuizQuestion} from '../data/types';
import {shuffleArray} from './shuffleArray';

const getRandomElement = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export const createQuizQuestion = (
  quizIndex: number,
  shuffledKanaIds: string[]
): QuizQuestion | undefined => {
  if (shuffledKanaIds.length === 0) {
    return undefined;
  }

  const answerId = shuffledKanaIds[quizIndex];
  const questionIds: string[] = [answerId];

  for (let i = 0; i < 3; i += 1) {
    let randomId = getRandomElement(shuffledKanaIds);
    while (randomId === answerId) {
      randomId = getRandomElement(shuffledKanaIds);
    }
    questionIds.push(randomId);
  }

  return {
    answerId,
    questionIds: shuffleArray(questionIds),
  };
};
