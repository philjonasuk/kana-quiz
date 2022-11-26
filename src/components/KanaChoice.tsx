import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {useKanaContext} from '../data/context';

export const KanaChoice: React.FC = () => {
  const {kana, setKana} = useKanaContext();
  return (
    <FormControl>
      <FormLabel>Choose a Japanese script</FormLabel>
      <RadioGroup value={kana}>
        <FormControlLabel
          value="h"
          control={<Radio />}
          label="あいうえお"
          onChange={() => {
            setKana('h');
          }}
        />
        <FormControlLabel
          value="k"
          control={<Radio />}
          label="アイウエオ"
          onChange={() => {
            setKana('k');
          }}
        />
      </RadioGroup>
    </FormControl>
  );
};
