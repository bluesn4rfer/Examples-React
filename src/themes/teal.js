import { createTheme } from '@mui/material/styles';

const tealTheme = createTheme({
  name: 'teal',
  label: 'Teal',  
  palette: {
    primary: {
      main: '#008080',  // Teal color
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#20B2AA',  // Light Sea Green
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#3CB371',  // Medium Sea Green
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#4682B4',  // Steel Blue
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFD700',  // Gold
      contrastText: '#333333',
    },
    error: {
      main: '#DC143C',  // Crimson
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#E0FFFF',  // Light Cyan
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default tealTheme;
