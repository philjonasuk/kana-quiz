import {Typography} from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {KanaChoice} from '../components/KanaChoice';
import {useKanaContext} from '../data/context';

export const MainMenu: React.FC = () => {
  const navigate = useNavigate();
  const {kana} = useKanaContext();

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="h3">Kana Quiz</Typography>
        <KanaChoice />
      </Grid>
      <Grid item xs={6}>
        <Button onClick={() => navigate(`/quiz/${kana}/12345/1`)}>New Game</Button>
        <Button onClick={() => navigate(`/review/${kana}/1`)}>Review</Button>
      </Grid>
    </Grid>
  );
};
