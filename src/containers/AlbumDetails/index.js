import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import MainLayout from '../../layouts/MainLayout';
import {
  StyledAlbumInfo,
  StyledButton,
  StyledCard,
  StyledCardMedia,
  StyledContentWrapper,
  StyledCoverWrapper,
  StyledHeader,
  StyledSongList,
} from './index.styled';
import { ALBUMS_BY_GENRES } from '../../constants/mockData';
import SongsListing from '../../components/SongsListing';

export default function AlbumDetails() {
  const { albumId = '', genre } = useParams();
  const theme = useTheme();
  const [album, setAlbum] = useState({});
  const matchesScreenSizeSm = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (albumId && genre) {
      const foundAlbum = ALBUMS_BY_GENRES[genre]?.albums?.find((item) => item.id === albumId);

      setAlbum(foundAlbum);
    }
  }, [albumId, genre]);

  return (
    <MainLayout>
      <StyledContentWrapper>
        <StyledHeader>
          <StyledCoverWrapper>
            {album?.image && (
              <StyledCard>
                <StyledCardMedia image={album?.image} />
              </StyledCard>
            )}

            {album && (
              <StyledAlbumInfo>
                <div>
                  <Typography variant="body2" fontWeight={600}>
                    ALBUM
                  </Typography>

                  <Typography variant={matchesScreenSizeSm ? 'h4' : 'h3'} fontWeight={600} mt={2}>
                    {album?.name?.toUpperCase()}
                  </Typography>
                </div>

                <Typography variant="body2" fontWeight={600}>
                  {`${album?.artist} - ${album?.year}`}
                </Typography>
              </StyledAlbumInfo>
            )}
          </StyledCoverWrapper>
        </StyledHeader>

        <StyledSongList pl={4} pt={3}>
          <StyledButton>
            <PlayArrowIcon />
          </StyledButton>

          {album?.songs?.length > 0 && (
            <SongsListing songs={album?.songs} />
          )}
        </StyledSongList>
      </StyledContentWrapper>
    </MainLayout>
  );
}
