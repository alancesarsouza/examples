import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from '../routes/Routes';
import GlobalStyle from '../styles/Global';
import theme from '../config/theme/theme';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>

  </BrowserRouter>
);

export default App;
