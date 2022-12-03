import {Box, Button, Typography} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {KanaChart} from '../components/KanaChart';
import {useKanaContext} from '../data/context';
import {useSetKana} from '../hooks/useSetKana';

export const Review: React.FC = () => {
  const navigate = useNavigate();
  const {kanaLabel} = useKanaContext();
  useSetKana();

  return (
    <Box>
      <Typography variant="h3">{kanaLabel} Review</Typography>
      <KanaChart />
      <Button onClick={() => navigate(`/`)}>Back</Button>
    </Box>
  );
};
