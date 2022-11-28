import React from 'react';
import {render} from '@testing-library/react';
import {Quiz} from './Quiz';

describe('Quiz', () => {
  it('renders', () => {
    render(<Quiz />);
  });
});
