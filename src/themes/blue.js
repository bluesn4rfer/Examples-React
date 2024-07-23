import { createTheme } from '@mui/material/styles';

const blueTheme = createTheme({
  palette: {
    primary: {
      main: '#0074D9',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C4E1F8',
      contrastText: '#333333',
    },
    success: {
      main: '#48C774',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#5BC0DE',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#F2C94C',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF3B3F',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#D6EAF8',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default blueTheme;
