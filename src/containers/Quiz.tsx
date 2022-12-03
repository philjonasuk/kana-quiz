import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import React from 'react';
import {useKanaContext} from '../data/context';
import {useSetKana} from '../hooks/useSetKana';

export const Quiz: React.FC = () => {
  const {kanaLabel, quizQuestion} = useKanaContext();
  console.log({quizQuestion});
  useSetKana();
  return (
    <Box>
      <Typography variant="h3">{kanaLabel} Quiz</Typography>
      <Typography variant="h1" ml="auto" mr="auto">
        {quizQuestion?.answer.kana}
      </Typography>
      <Box>
        <FormControl>
          <RadioGroup>
            {quizQuestion?.questions.map((question) => (
              <FormControlLabel
                key={question.id}
                value={question.id}
                control={<Radio />}
                label={question.reading}
                onChange={() => {
                  // setKana('h');
                }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
