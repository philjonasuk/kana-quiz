import {Typography} from '@mui/material';
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {KanaChart} from '../components/KanaChart';
import {useKanaContext} from '../data/context';
import {KanaType} from '../data/types';

export const Review: React.FC = () => {
  const {kana} = useParams();
  const {setKana, kanaLabel} = useKanaContext();

  useEffect(() => {
    if (!kana) {
      return;
    }
    setKana(kana as KanaType);
  }, [kana]);

  return (
    <>
      <Typography variant="h3">{kanaLabel} Review</Typography>
      <KanaChart />
    </>
  );
};
