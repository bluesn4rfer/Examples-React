import { createTheme } from '@mui/material/styles';

const orangeTheme = createTheme({
  name: 'orange',
  label: 'Orange',  
  palette: {
    primary: {
      main: '#FFA500',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFD19C',
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
      main: '#FF5733',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#DC3545',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFE0B2',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default orangeTheme;
