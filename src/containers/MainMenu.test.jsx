import React from 'react';
import {render} from '@testing-library/react';
import {MainMenu} from './MainMenu';

describe('MainMenu', () => {
  it('renders', () => {
    render(<MainMenu />);
  });
});
