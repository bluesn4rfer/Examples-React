import { createTheme } from '@mui/material/styles';

const navyTheme = createTheme({
  name: 'navy',
  label: 'Navy',
  palette: {
    primary: {
      main: '#001F3F',  // Navy color
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3D5A80',  // Light Navy
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#2E8B57',  // Sea Green
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#4682B4',  // Steel Blue
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FF851B',  // Orange
      contrastText: '#333333',
    },
    error: {
      main: '#B22222',  // Firebrick
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F0F8FF',  // Alice Blue
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default navyTheme;
