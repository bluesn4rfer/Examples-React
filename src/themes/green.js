import { createTheme } from '@mui/material/styles';

const greenTheme = createTheme({
  palette: {
    primary: {
      main: '#008000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#83BFA3',
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
      default: '#C3E6CB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default greenTheme;
