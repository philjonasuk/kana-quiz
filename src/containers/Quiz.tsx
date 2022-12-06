import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import React, {useMemo, useState} from 'react';
import {BackButton} from '../components/BackButton';
import {Tally} from '../components/Tally';
import {useKanaContext} from '../data/context';
import {AnswerType} from '../data/types';
import {useSetKana} from '../hooks/useSetKana';

export const Quiz: React.FC = () => {
  const {
    kanaLabel,
    quizQuestion,
    incrementQuizQuestion,
    isLastQuizIndex,
    incrementCorrectQuestion,
  } = useKanaContext();
  const [chosenId, setChosenId] = useState<string | null>(null);
  const [answerType, setAnswerType] = useState<AnswerType>('unanswered');
  const buttonLabel = useMemo(() => {
    if (answerType === 'unanswered') {
      return 'Please choose an option';
    }

    if (answerType === 'correct') {
      return 'Correct! next question';
    }

    return `The correct answer is : ${quizQuestion?.answer.reading}... next question`;
  }, [answerType, quizQuestion?.answer.reading]);
  useSetKana();

  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Typography variant="h3">{kanaLabel} Quiz</Typography>
      <Tally />
      <Typography variant="h1" ml="auto" mr="auto">
        {quizQuestion?.answer.kana}
      </Typography>
      <FormControl>
        <RadioGroup
          value={chosenId}
          style={{display: 'flex', flexDirection: 'row'}}
          key={quizQuestion?.answer.id}
        >
          {quizQuestion?.questions.map((question) => (
            <FormControlLabel
              key={question.id}
              value={question.id}
              control={<Radio />}
              label={question.reading}
              disabled={answerType !== 'unanswered'}
              onChange={() => {
                setChosenId(question.id);
                const thisAnswerType: AnswerType =
                  question.id === quizQuestion?.answer.id ? 'correct' : 'wrong';
                setAnswerType(thisAnswerType);
                incrementCorrectQuestion(thisAnswerType === 'correct');
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Box>
        <Button
          variant="contained"
          disabled={answerType === 'unanswered' || isLastQuizIndex}
          onClick={() => {
            setChosenId(null);
            setAnswerType('unanswered');
            incrementQuizQuestion();
          }}
        >
          {buttonLabel}
        </Button>
      </Box>
      <Box>
        <BackButton />
      </Box>
    </Box>
  );
};
