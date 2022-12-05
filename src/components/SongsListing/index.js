import React from 'react';
import {
  Box, Divider, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import { arrayOf } from 'prop-types';

import { StyledClockIcon } from './index.styled';
import SongRowComponent from '../SongRowComponent';

SongsListing.propTypes = {
  songs: arrayOf(Object).isRequired,
};

export default function SongsListing(props) {
  const { songs } = props;
  const theme = useTheme();
  const matchesScreenSizeSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mr={8} ml={3}>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" fontWeight={500} color="textSecondary" mr={4}>
            #
          </Typography>

          <Typography variant="body2" fontWeight={500} color="textSecondary">
            TITLE
          </Typography>
        </Box>

        {!matchesScreenSizeSm && <StyledClockIcon />}
      </Box>

      <Divider sx={{ my: 1.5, mr: 3 }} />

      {songs.map((song, index) => <SongRowComponent song={song} index={index + 1} key={song.id} />)}
    </>
  );
}
