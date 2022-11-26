import React from 'react';
import {useParams} from 'react-router-dom';

export const Review: React.FC = () => {
  const {kana} = useParams();
  return <div>Review {kana}</div>;
};
