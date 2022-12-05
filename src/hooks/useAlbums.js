import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

export function useAlbumsHook() {
  const theme = useTheme();
  const [maxVisibleAlbums, setMaxVisibleAlbums] = useState(4);
  const matchesScreenSizeXl = useMediaQuery(theme.breakpoints.down('xl'));
  const matchesScreenSizeLg = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesScreenSizeMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchesScreenSizeSm = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (matchesScreenSizeXl) {
      setMaxVisibleAlbums(4);
    }

    if (matchesScreenSizeLg) {
      setMaxVisibleAlbums(3);
    }

    if (matchesScreenSizeMd) {
      setMaxVisibleAlbums(2);
    }

    if (matchesScreenSizeSm) {
      setMaxVisibleAlbums(1);
    }
  }, [matchesScreenSizeXl, matchesScreenSizeLg, matchesScreenSizeMd, matchesScreenSizeSm]);

  return {
    maxVisibleAlbums,
  };
}
