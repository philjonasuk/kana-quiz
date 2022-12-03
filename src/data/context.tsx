import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {shuffleArray} from '../utils/shuffleArray';
import {kana_list} from './kana_list';
import {KanaType, KanaContextType} from './types';

export const KanaContext = createContext<KanaContextType>({} as KanaContextType);

export const KanaProvider: React.FC<any> = ({children}) => {
  const [kana, setKana] = useState<KanaType>('h');
  const [previousKana, setPreviousKana] = useState<KanaType | null>(null);
  const kanaLabel = useMemo(() => (kana === 'k' ? 'Katakana' : 'Hiragana'), [kana]);
  const [shuffledKanaIds, setShuffledKanaIds] = useState<string[]>([]);

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

  return (
    <KanaContext.Provider value={{kana, setKana, kanaLabel, shuffledKanaIds}}>
      {children}
    </KanaContext.Provider>
  );
};

export const useKanaContext = () => useContext(KanaContext);
