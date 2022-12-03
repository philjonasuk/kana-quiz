import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material';
import React from 'react';

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
