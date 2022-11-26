export type Kana = 'k' | 'h';

export interface KanaContextType {
  kana: Kana;
  setKana: React.Dispatch<React.SetStateAction<Kana>>;
  getKanaLabel: (k: Kana) => string;
}
