import {Typography, Button, Box} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {KanaChoice} from '../components/KanaChoice';
import {useKanaContext} from '../data/context';

export const MainMenu: React.FC = () => {
  const navigate = useNavigate();
  const {kana, kanaLabel} = useKanaContext();

  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Typography variant="h3">{kanaLabel} Quiz</Typography>
      <KanaChoice />
      <Button variant="outlined" onClick={() => navigate(`/quiz/${kana}`)}>
        New {kanaLabel} Quiz
      </Button>
      <Button variant="outlined" onClick={() => navigate(`/review/${kana}`)}>
        {kanaLabel} Review
      </Button>
    </Box>
  );
};
