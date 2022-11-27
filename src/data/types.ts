export type KanaType = 'k' | 'h';

export interface KanaContextType {
  kana: KanaType;
  setKana: React.Dispatch<React.SetStateAction<KanaType>>;
  getKanaLabel: (k: KanaType) => string;
}

export interface KanaCharacter {
  id: string;
  row: number;
  kana: string;
  reading: string;
  type: KanaType;
  col: number;
}
