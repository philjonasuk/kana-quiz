import React, {createContext, useContext, useMemo, useState} from 'react';
import {KanaType, KanaContextType} from './types';

export const KanaContext = createContext<KanaContextType>({} as KanaContextType);

export const KanaProvider: React.FC<any> = ({children}) => {
  const [kana, setKana] = useState<KanaType>('h');
  const kanaLabel = useMemo(() => (kana === 'k' ? 'Katakana' : 'Hiragana'), [kana]);
  return (
    <KanaContext.Provider value={{kana, setKana, kanaLabel}}>
      {children}
    </KanaContext.Provider>
  );
};

export const useKanaContext = () => useContext(KanaContext);
