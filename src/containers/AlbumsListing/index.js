import React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ALBUMS_BY_GENRES } from '../../constants/mockData';
import AlbumCard from '../../components/AlbumCard';
import { StyledContainer } from './index.styled';
import { useAlbumsHook } from '../../hooks/useAlbums';
import { ALBUM_DETAILS_ROUTE } from '../../constants/clientRoutes';
import { formatRoute } from '../../utils/formatters';
import MainLayout from '../../layouts/MainLayout';

export default function AlbumsListing() {
  const { maxVisibleAlbums } = useAlbumsHook();
  const navigate = useNavigate();
  const handleClickAlbum = ({ id: albumId, genre }) => {
    navigate(formatRoute(ALBUM_DETAILS_ROUTE, { albumId, genre }));
  };

  return (
    <MainLayout>
      <StyledContainer>
        {Object.values(ALBUMS_BY_GENRES).map(({ name, albums }) => {
          const formattedAlbums = albums.slice(0, maxVisibleAlbums);

          return (
            <Box key={name} py={2.5} maxWidth="1050px">
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                <Typography variant="h5" fontWeight={600}>
                  {name}
                </Typography>

                <Typography variant="body2" fontWeight={600} color="textSecondary" sx={{ cursor: 'pointer' }}>
                  SHOW ALL
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                {formattedAlbums.map((album) => (
                  <AlbumCard
                    album={album}
                    key={album.id}
                    handleClickAlbum={() => handleClickAlbum(album)}
                  />
                ))}
              </Box>
            </Box>
          );
        })}
      </StyledContainer>
    </MainLayout>
  );
}
