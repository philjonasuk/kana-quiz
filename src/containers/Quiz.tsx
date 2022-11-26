import React from 'react';
import {useParams} from 'react-router-dom';

export const Quiz: React.FC = () => {
  const {kana, seed} = useParams();
  return (
    <div>
      Quiz {kana} {seed}
    </div>
  );
};
