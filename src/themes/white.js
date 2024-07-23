import { createTheme } from '@mui/material/styles';

const whiteTheme = createTheme({
  palette: {
    primary: {
      main: '#E0E0E0',
      contrastText: '#333333',
    },
    secondary: {
      main: '#F0F0F0',
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
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default whiteTheme;
