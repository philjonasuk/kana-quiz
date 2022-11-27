import React, {createContext, useContext, useState} from 'react';
import {KanaType, KanaContextType} from './types';

export const KanaContext = createContext<KanaContextType>({} as KanaContextType);

export const KanaProvider: React.FC<any> = ({children}) => {
  const [kana, setKana] = useState<KanaType>('h');
  const getKanaLabel = (k: KanaType): string => (k === 'k' ? 'Katakana' : 'Hiragana');
  return (
    <KanaContext.Provider value={{kana, setKana, getKanaLabel}}>
      {children}
    </KanaContext.Provider>
  );
};

export const useKanaContext = () => useContext(KanaContext);
