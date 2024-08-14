import { createTheme } from '@mui/material/styles';

const indigoTheme = createTheme({
  name: 'indigo',
  label: 'Indigo',
  palette: {
    primary: {
      main: '#3F51B5',  // Indigo color
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#5C6BC0',  // Light Indigo
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',  // Green
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#7986CB',  // Soft Indigo
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFC107',  // Amber
      contrastText: '#333333',
    },
    error: {
      main: '#F44336',  // Red
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#E8EAF6',  // Light Indigo background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default indigoTheme;
