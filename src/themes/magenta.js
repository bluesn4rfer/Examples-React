import { createTheme } from '@mui/material/styles';

const magentaTheme = createTheme({
  name: 'magenta',
  label: 'Magenta',
  palette: {
    primary: {
      main: '#FF00FF',  // Magenta color
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C71585',  // Medium Violet Red
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#DA70D6',  // Orchid
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#BA55D3',  // Medium Orchid
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FF4500',  // Orange Red
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#B22222',  // Firebrick
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8E0F1',  // Light Magenta background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default magentaTheme;
