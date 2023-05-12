import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'GlobalStyles';

const theme = {
  colors: {
    text: '#212121',
    black: '#000',
    white: '#fff',
    gray: '#707070',
    lightGray: '#f3f4f3',
    accent: 'tomato',
    green: 'green',
    lightGreen: '#5F8575',
    red: 'orangeRed',
    orange: '#e85b0f',
    lightBlue: '#14acdf',
    error: 'red',
    blue: '#4d4dff',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>
);
