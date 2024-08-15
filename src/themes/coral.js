import { createTheme } from '@mui/material/styles';

const coralTheme = createTheme({
  name: 'coral',
  label: 'Coral',
  palette: {
    primary: {
      main: '#FF7F50',  // Coral color
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF6347',  // Tomato
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#FF4500',  // Orange Red
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#FF8C00',  // Dark Orange
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFD700',  // Gold
      contrastText: '#333333',
    },
    error: {
      main: '#B22222',  // Firebrick
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFF5EE',  // Seashell
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default coralTheme;
