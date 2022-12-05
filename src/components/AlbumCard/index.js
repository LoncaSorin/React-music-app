import React from 'react';
import { instanceOf, func } from 'prop-types';
import { Box, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import {
  StyledBox, StyledButton, StyledCard, StyledCardMedia,
} from './index.styled';

AlbumCard.propTypes = {
  album: instanceOf(Object).isRequired,
  handleClickAlbum: func.isRequired,
};

export default function AlbumCard(props) {
  const { album, handleClickAlbum } = props;

  return (
    <StyledBox onClick={handleClickAlbum}>
      <Box height="225px" position="relative">
        <StyledCard>
          <StyledCardMedia image={album.image} />
        </StyledCard>

        <StyledButton>
          <PlayArrowIcon />
        </StyledButton>
      </Box>

      <Typography variant="body1" fontWeight={600} mt={2}>
        {album.name}
      </Typography>

      <Typography variant="body2" mt={1} fontWeight={500} color="textSecondary">
        {album.artist}
      </Typography>
    </StyledBox>
  );
}
