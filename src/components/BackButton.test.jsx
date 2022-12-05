import React from 'react';
import {render} from '@testing-library/react';
import {BackButton} from './BackButton';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('BackButton', () => {
  it('renders', () => {
    render(<BackButton />);
  });
});
