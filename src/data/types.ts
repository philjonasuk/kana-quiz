export type KanaType = 'k' | 'h';

export interface QuizQuestion {
  answerId: string;
  questionIds: string[];
}

export interface KanaContextType {
  kana: KanaType;
  setKana: React.Dispatch<React.SetStateAction<KanaType>>;
  kanaLabel: string;
  shuffledKanaIds: string[];
  quizIndex: number;
  quizQuestion: QuizQuestion | undefined;
  incrementQuizQuestion: () => void;
}

export interface KanaCharacter {
  id: string;
  row: number;
  kana: string;
  reading: string;
  type: KanaType;
  column: number;
}
