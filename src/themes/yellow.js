import { createTheme } from '@mui/material/styles';

const yellowTheme = createTheme({
  palette: {
    primary: {
      main: '#FFD700',
      contrastText: '#333333',
    },
    secondary: {
      main: '#FFEFB3',
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
      default: '#FFEB99',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default yellowTheme;
