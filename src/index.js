import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import mainTheme from './styles/themes';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle>
      <ThemeProvider theme={mainTheme}>
        <App />
      </ThemeProvider>
    </GlobalStyle>
  </React.StrictMode>,
  document.getElementById('root')
);
