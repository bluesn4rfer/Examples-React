import { createTheme } from '@mui/material/styles';

const redTheme = createTheme({
  palette: {
    primary: {
      main: '#CC0000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF9090',
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
      default: '#FFB3B3',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default redTheme;
