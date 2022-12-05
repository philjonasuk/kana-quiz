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
import {useNavigate} from 'react-router-dom';
import {useKanaContext} from '../data/context';
import {AnswerType} from '../data/types';
import {useSetKana} from '../hooks/useSetKana';

export const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const {
    kanaLabel,
    quizQuestion,
    incrementQuizQuestion,
    correctAnswersCount,
    shuffledKanaIds,
    quizIndex,
    resetQuiz,
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
    <Box>
      <Typography variant="h3">{kanaLabel} Quiz</Typography>
      <Typography variant="h5">
        Current: {quizIndex + 1} / Correct: {correctAnswersCount} / Total:{' '}
        {shuffledKanaIds.length}
      </Typography>
      <Typography variant="h1" ml="auto" mr="auto">
        {quizQuestion?.answer.kana}
      </Typography>
      <FormControl>
        <RadioGroup value={chosenId} style={{display: 'flex', flexDirection: 'row'}}>
          {quizQuestion?.questions.map((question) => (
            <FormControlLabel
              key={question.id}
              value={question.id}
              control={<Radio />}
              label={question.reading}
              disabled={answerType !== 'unanswered'}
              onChange={() => {
                setChosenId(question.id);
                setAnswerType(
                  question.id === quizQuestion?.answer.id ? 'correct' : 'wrong'
                );
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Box>
        <Button
          variant="contained"
          disabled={answerType === 'unanswered'}
          onClick={() => {
            setChosenId(null);
            setAnswerType('unanswered');
            incrementQuizQuestion(answerType === 'correct');
          }}
        >
          {buttonLabel}
        </Button>
      </Box>
      <Box>
        <Button
          onClick={() => {
            resetQuiz();
            navigate(`/`);
          }}
        >
          Back to main page
        </Button>
      </Box>
    </Box>
  );
};
