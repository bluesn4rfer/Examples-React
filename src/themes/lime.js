import { createTheme } from '@mui/material/styles';

const limeTheme = createTheme({
  name: 'lime',
  label: 'Lime',
  palette: {
    primary: {
      main: '#CDDC39',  // Lime color
      contrastText: '#333333',
    },
    secondary: {
      main: '#AFB42B',  // Dark Lime
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#8BC34A',  // Light Green
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#9E9D24',  // Olive Green
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFC107',  // Amber
      contrastText: '#333333',
    },
    error: {
      main: '#D32F2F',  // Red
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F0F4C3',  // Light Lime background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default limeTheme;
