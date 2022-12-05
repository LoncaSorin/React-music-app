import React from 'react';
import { instanceOf, number } from 'prop-types';
import {
  Box, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { StyledBox } from './index.styled';

SongRowComponent.propTypes = {
  song: instanceOf(Object).isRequired,
  index: number.isRequired,
};

export default function SongRowComponent(props) {
  const { song, index } = props;
  const theme = useTheme();
  const matchesScreenSizeSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledBox my={1}>
      <Box display="flex" alignItems="center">
        <Box height="24px" width="24px" ml={1} mr={4} id="index-row">
          <Typography variant="body1" color="textSecondary" fontWeight={600}>
            {index}
          </Typography>
        </Box>

        <Box mr={5} id="play-row">
          <PlayArrowIcon />
        </Box>

        <Box>
          <Typography variant="body1" fontWeight={600}>
            {song.name}
          </Typography>

          <Typography variant="body2" color="textSecondary" fontWeight={500} mt={0.5}>
            {song.artists.join(', ')}
          </Typography>
        </Box>
      </Box>

      {!matchesScreenSizeSm && (
        <Typography variant="body1">
          {song.duration}
        </Typography>
      )}
    </StyledBox>
  );
}
