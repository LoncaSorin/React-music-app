import React from 'react';
import { ThemeProvider } from '@mui/material';

import getAppTheme from './assets/themes/theme';
import AppRouter from './AppRouter';

export default function AppData() {
  return (
    <ThemeProvider theme={getAppTheme()}>
      <AppRouter />
    </ThemeProvider>
  );
}
