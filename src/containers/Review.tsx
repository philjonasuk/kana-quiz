import {Box, Button, Typography} from '@mui/material';
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {KanaChart} from '../components/KanaChart';
import {useKanaContext} from '../data/context';
import {KanaType} from '../data/types';

export const Review: React.FC = () => {
  const {kana} = useParams();
  const navigate = useNavigate();
  const {setKana, kanaLabel} = useKanaContext();

  if (!kana) {
    return null;
  }

  setKana(kana as KanaType);

  return (
    <Box>
      <Typography variant="h3">{kanaLabel} Review</Typography>
      <KanaChart />
      <Button onClick={() => navigate(`/`)}>Back</Button>
    </Box>
  );
};
