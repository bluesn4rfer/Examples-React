import { createTheme } from '@mui/material/styles';

const brownTheme = createTheme({
  palette: {
    primary: {
      main: '#734922',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#A38667',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#228B22',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#2E8B57',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFA500',
      contrastText: '#333333',
    },
    error: {
      main: '#8B0000',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#D2B48C',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default brownTheme;
