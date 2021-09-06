import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyles from 'utils/GlobalStyles';
import 'utils/fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
