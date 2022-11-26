import {Typography} from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {KanaChoice} from '../components/KanaChoice';

export const MainMenu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={6} direction="column">
        <Typography variant="h3">Kana Quiz</Typography>
        <KanaChoice />
      </Grid>
      <Grid item xs={6} direction="column">
        <Button onClick={() => navigate('/quiz/k/12345/1')}>New Game</Button>
        <Button onClick={() => navigate('/review/h/1')}>Review</Button>
      </Grid>
    </Grid>
  );
};
