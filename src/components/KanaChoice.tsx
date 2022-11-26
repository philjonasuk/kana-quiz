import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const KanaChoice: React.FC = () => {
  const [kana, setKana] = useState<'h' | 'k'>('h');
  return (
    <FormControl>
      <FormLabel>Japanese script: {kana === 'k' ? 'Katakana' : 'Hiragana'}</FormLabel>
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
