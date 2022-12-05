import React from 'react';
import {render} from '@testing-library/react';
import {Quiz} from './Quiz';
import {KanaProvider} from '../data/context';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Quiz', () => {
  it('renders', () => {
    render(
      <KanaProvider>
        <Quiz />
      </KanaProvider>
    );
  });
});
