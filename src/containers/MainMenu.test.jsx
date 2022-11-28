import React from 'react';
import {render} from '@testing-library/react';
import {MainMenu} from './MainMenu';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('MainMenu', () => {
  it('renders', () => {
    render(<MainMenu />);
  });
});
