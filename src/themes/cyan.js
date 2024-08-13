import { createTheme } from '@mui/material/styles';

const cyanTheme = createTheme({
  name: 'cyan',
  label: 'Cyan',
  palette: {
    primary: {
      main: '#00BCD4',  // Cyan color
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0097A7',  // Dark Cyan
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#26C6DA',  // Light Cyan
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#00ACC1',  // Medium Cyan
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFB300',  // Amber
      contrastText: '#333333',
    },
    error: {
      main: '#D32F2F',  // Red
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#E0F7FA',  // Cyan background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default cyanTheme;
