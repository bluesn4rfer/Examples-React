import { createTheme } from '@mui/material/styles';

const oliveTheme = createTheme({
  name: 'olive',
  label: 'Olive',
  palette: {
    primary: {
      main: '#808000',  // Olive color
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#6B8E23',  // Olive Drab
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#556B2F',  // Dark Olive Green
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#9ACD32',  // Yellow Green
      contrastText: '#333333',
    },
    warning: {
      main: '#FFD700',  // Gold
      contrastText: '#333333',
    },
    error: {
      main: '#8B0000',  // Dark Red
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5DC',  // Beige
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default oliveTheme;
