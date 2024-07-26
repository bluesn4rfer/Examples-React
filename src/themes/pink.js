import { createTheme } from '@mui/material/styles';

const pinkTheme = createTheme({
  name: 'pink',
  label: 'Pink',  
  palette: {
    primary: {
      main: '#FF4081',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFD0DB',
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
      default: '#FCE4EC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default pinkTheme;
