import React, {createContext, useContext, useState} from 'react';
import {Kana, KanaContextType} from './types';

export const KanaContext = createContext<KanaContextType>({} as KanaContextType);

export const KanaProvider: React.FC<any> = ({children}) => {
  const [kana, setKana] = useState<Kana>('h');
  const getKanaLabel = (k: Kana): string => (k === 'k' ? 'Katakana' : 'Hiragana');
  return (
    <KanaContext.Provider value={{kana, setKana, getKanaLabel}}>
      {children}
    </KanaContext.Provider>
  );
};

export const useKanaContext = () => useContext(KanaContext);
