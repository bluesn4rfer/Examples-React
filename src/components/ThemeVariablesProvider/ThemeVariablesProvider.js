import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

const ThemeVariablesProvider = () => {
  const theme = useTheme();

  useEffect(() => {
    const root = document.documentElement;

    // Map Material UI theme to CSS variables
    const themeVariables = {
      '--theme-primary-main': theme.palette.primary.main,
      '--theme-primary-contrastText': theme.palette.primary.contrastText,
      '--theme-secondary-main': theme.palette.secondary.main,
      '--theme-secondary-contrastText': theme.palette.secondary.contrastText,
      '--theme-background-default': theme.palette.background.default,
      '--theme-background-paper': theme.palette.background.paper,
      '--theme-text-primary': theme.palette.text.primary,
      '--theme-text-secondary': theme.palette.text.secondary,
      // Add more as needed
    };

    // Set each CSS variable on the root element
    Object.keys(themeVariables).forEach(key => {
      root.style.setProperty(key, themeVariables[key]);
    });
  }, [theme]);

  return null; // This component doesn't need to render anything
};

export default ThemeVariablesProvider;
