import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import Routes from '../routes/Routes';
import GlobalStyle from '../styles/Global';
import theme from '../config/theme/theme';

import store from '../redux/store';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

export default App;
