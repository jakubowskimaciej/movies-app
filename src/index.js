import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyles from 'utils/GlobalStyles';
import 'utils/fonts.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Root />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
