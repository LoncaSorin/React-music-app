import { createTheme } from '@mui/material/styles';

import palette from './palettes/palette';

const getAppTheme = () => {
  const theme = createTheme({
    palette,
    typography: {
      button: {
        textTransform: 'none',
      },
    },
  });

  return {
    ...theme,
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: palette.text.primary,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            color: palette.text.primary,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: palette.text.secondary,
          },
        },
      },
    },
  };
};

export default getAppTheme;
