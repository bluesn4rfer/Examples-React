import { createTheme } from '@mui/material/styles';

const greyTheme = createTheme({
  palette: {
    primary: {
      main: '#333333',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#808080',
      contrastText: '#FFFFFF',
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
      main: '#F39C12',
      contrastText: '#333333',
    },
    error: {
      main: '#DC3545',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#D8D8D8',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default greyTheme;
