import React from 'react';
import {useParams} from 'react-router-dom';

export const Review = (): JSX.Element => {
  const {kana, id} = useParams();
  return (
    <div>
      Review {kana} {id}
    </div>
  );
};
