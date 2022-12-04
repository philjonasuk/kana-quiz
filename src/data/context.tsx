import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {createQuizQuestion} from '../utils/createQuizQuestion';
import {shuffleArray} from '../utils/shuffleArray';
import {kana_list} from './kana_list';
import {KanaType, KanaContextType, QuizQuestion} from './types';

export const KanaContext = createContext<KanaContextType>({} as KanaContextType);

export const KanaProvider: React.FC<any> = ({children}) => {
  const [kana, setKana] = useState<KanaType>('h');
  const [previousKana, setPreviousKana] = useState<KanaType | null>(null);
  const kanaLabel = useMemo(() => (kana === 'k' ? 'Katakana' : 'Hiragana'), [kana]);
  const [shuffledKanaIds, setShuffledKanaIds] = useState<string[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  useEffect(() => {
    // only create a new shuffled array if kana type has changed
    if (kana === previousKana) {
      return;
    }
    setShuffledKanaIds(
      shuffleArray(kana_list.filter((x) => x.type === kana).map((x) => x.id))
    );
    setPreviousKana(kana);
  }, [kana, previousKana]);

  const incrementQuizQuestion = (isCorrectAnswer?: boolean) => {
    setQuizIndex((previousValue) => previousValue + 1);
    if (isCorrectAnswer) {
      setCorrectAnswersCount((previousValue) => previousValue + 1);
    }
  };

  const quizQuestion: QuizQuestion | undefined = useMemo(
    () => createQuizQuestion(quizIndex, shuffledKanaIds),
    [quizIndex, shuffledKanaIds]
  );

  const resetQuiz = () => {
    setQuizIndex(0);
    setCorrectAnswersCount(0);
  };

  return (
    <KanaContext.Provider
      value={{
        kana,
        setKana,
        kanaLabel,
        shuffledKanaIds,
        quizIndex,
        quizQuestion,
        incrementQuizQuestion,
        correctAnswersCount,
        resetQuiz,
      }}
    >
      {children}
    </KanaContext.Provider>
  );
};

export const useKanaContext = () => useContext(KanaContext);
