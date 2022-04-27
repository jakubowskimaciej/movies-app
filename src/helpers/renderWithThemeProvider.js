import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';

export const renderWithProvider = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
