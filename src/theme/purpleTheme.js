import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const purpleTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#214C8F',
    },
    secondary: {
      main: '#543884',
    },
    error: {
      main: red.A400,
    },
  },

});

