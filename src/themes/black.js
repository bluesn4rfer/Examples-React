import { createTheme } from '@mui/material/styles';

const blackTheme = createTheme({
  name: 'black',
  label: 'Black',  
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#333333',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#28a745',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#17a2b8',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#ffc107',
      contrastText: '#333333',
    },
    error: {
      main: '#dc3545',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#1a1a1a',
      paper: '#333333', // Adjusted for readability
    },
    text: {
      primary: '#FFFFFF',
    },
  },
});

export default blackTheme;
