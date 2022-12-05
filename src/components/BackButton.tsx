import {Button} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useKanaContext} from '../data/context';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const {resetQuiz} = useKanaContext();
  return (
    <Button
      variant="outlined"
      onClick={() => {
        resetQuiz();
        navigate(`/`);
      }}
    >
      Back to main page
    </Button>
  );
};
