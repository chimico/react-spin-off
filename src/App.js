import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo, teal } from '@mui/material/colors'

import Routes from './routes'

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: indigo[600],
    },
    secondary: {
      main: teal[300],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
