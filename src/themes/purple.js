import { createTheme } from '@mui/material/styles';

const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#8A2BE2',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#B495D9',
      contrastText: '#333333',
    },
    success: {
      main: '#28A745',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#17A2B8',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFC107',
      contrastText: '#333333',
    },
    error: {
      main: '#DC3545',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#BEB9E6',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default purpleTheme;
