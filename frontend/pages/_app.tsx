import {ThemeProvider} from 'styled-components';
import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

// import { Container } from './styles';

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
      </ThemeProvider>
  );
}

export default MyApp;