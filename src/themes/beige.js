import { createTheme } from '@mui/material/styles';

const beigeTheme = createTheme({
  name: 'beige',
  label: 'Beige',
  palette: {
    primary: {
      main: '#F5F5DC',  // Beige color
      contrastText: '#333333',
    },
    secondary: {
      main: '#D2B48C',  // Tan
      contrastText: '#333333',
    },
    success: {
      main: '#8B7765',  // Khaki
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#CD853F',  // Peru
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#DAA520',  // Goldenrod
      contrastText: '#333333',
    },
    error: {
      main: '#A0522D',  // Sienna
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAF0E6',  // Linen
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default beigeTheme;
