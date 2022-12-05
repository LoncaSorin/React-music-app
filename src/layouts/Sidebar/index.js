import React from 'react';
import {
  Box, MenuList, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {
  StyledBox, StyledCard, StyledCardMedia, StyledIcon, StyledMenuItem,
} from './index.styled';
import { sidebarOptions } from '../../constants/siderbarOptions';
import shippedOrder from '../../assets/images/spotify_icon.png';
import { HOME_ROUTE } from '../../constants/clientRoutes';

export default function Sidebar() {
  const navigate = useNavigate();
  const hasSidebarOptions = sidebarOptions.length > 0;

  const handleClickLogo = () => {
    navigate(HOME_ROUTE);
  };

  const handleClickOption = (path) => {
    navigate(path);
  };

  return (
    <StyledBox>
      <Box
        display="flex"
        alignItems="center"
        my={3}
        pl={1}
        sx={{ cursor: 'pointer' }}
        onClick={handleClickLogo}
      >
        <StyledCard>
          <StyledCardMedia image={shippedOrder} />
        </StyledCard>

        <Typography variant="h5" ml={1} fontWeight={500}>
          Spotify
        </Typography>
      </Box>

      {hasSidebarOptions && (
        <MenuList>
          {sidebarOptions.map((menuOption) => (
            <StyledMenuItem sx={{ mb: 1 }} key={menuOption.id} onClick={() => handleClickOption(menuOption.path)}>
              <Box display="flex" alignItems="center">
                <StyledIcon component={menuOption.icon} />

                <Typography variant="body1" fontWeight={500} ml={2}>
                  {menuOption.label}
                </Typography>
              </Box>
            </StyledMenuItem>
          ))}
        </MenuList>
      )}
    </StyledBox>
  );
}
