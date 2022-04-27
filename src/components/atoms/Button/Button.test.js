import React from 'react';
import { Button } from './Button';
import { renderWithProvider } from 'helpers/renderWithThemeProvider';

describe('Movies list item', () => {
  it('Renders the component', () => {
    renderWithProvider(<Button>click me</Button>);
  });
});
