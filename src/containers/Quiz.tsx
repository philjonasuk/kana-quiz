import React from 'react';
import {useParams} from 'react-router-dom';

export const Quiz: React.FC = () => {
  const {kana, seed, index} = useParams();
  return (
    <div>
      Quiz {kana} {seed} {index}
    </div>
  );
};
