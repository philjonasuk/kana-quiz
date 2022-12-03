import {kana_list} from '../data/kana_list';
import {KanaCharacter, QuizQuestion} from '../data/types';
import {shuffleArray} from './shuffleArray';

const getRandomElement = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
const getKanaFromId = (id: string) => kana_list.find((x) => x.id === id)!;

export const createQuizQuestion = (
  quizIndex: number,
  shuffledKanaIds: string[]
): QuizQuestion | undefined => {
  if (shuffledKanaIds.length === 0) {
    return undefined;
  }

  const answerId = shuffledKanaIds[quizIndex];
  const answer = getKanaFromId(answerId);
  const questions: KanaCharacter[] = [answer];

  for (let i = 0; i < 3; i += 1) {
    let randomId = getRandomElement(shuffledKanaIds);
    while (randomId === answerId) {
      randomId = getRandomElement(shuffledKanaIds);
    }
    questions.push(getKanaFromId(randomId));
  }

  return {
    answer,
    questions: shuffleArray(questions),
  };
};
