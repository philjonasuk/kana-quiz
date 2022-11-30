import React from 'react';
import {render} from '@testing-library/react';
import {Review} from './Review';

describe('Review', () => {
  it('renders', () => {
    render(<Review />);
  });
});
