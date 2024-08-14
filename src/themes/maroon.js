import { createTheme } from '@mui/material/styles';

const maroonTheme = createTheme({
  name: 'maroon',
  label: 'Maroon',
  palette: {
    primary: {
      main: '#800000',  // Maroon color
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#A52A2A',  // Brownish Maroon
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#8B4513',  // Saddle Brown
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#B22222',  // Firebrick
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFA500',  // Orange
      contrastText: '#333333',
    },
    error: {
      main: '#D32F2F',  // Red
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5',  // Light Gray background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default maroonTheme;
