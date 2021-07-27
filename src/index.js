import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import mainTheme from './styles/themes';
import materialTheme from './styles/themes/materialTheme';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={mainTheme}>
      <MaterialThemeProvider theme={materialTheme}>
        <App />
      </MaterialThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
