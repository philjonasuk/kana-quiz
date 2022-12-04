import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import React, {useState} from 'react';
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
        {answerType === 'wrong' && (
          <FormHelperText>
            The correct answer is : {quizQuestion?.answer.reading}
          </FormHelperText>
        )}
      </FormControl>
      <Box>
        {answerType !== 'unanswered' && (
          <Button
            variant="contained"
            onClick={() => {
              setChosenId(null);
              setAnswerType('unanswered');
              incrementQuizQuestion(answerType === 'correct');
            }}
          >
            {`${
              answerType === 'correct'
                ? 'Correct! next question'
                : 'Wrong... next question'
            }`}
          </Button>
        )}
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
