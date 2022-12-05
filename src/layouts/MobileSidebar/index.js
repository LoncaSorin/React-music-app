import React from 'react';
import {
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {
  StyledBox,
  StyledIcon,
} from './index.styled';
import { sidebarOptions } from '../../constants/siderbarOptions';

export default function MobileSidebar() {
  const navigate = useNavigate();
  const hasSidebarOptions = sidebarOptions.length > 0;

  const handleClickOption = (path) => {
    navigate(path);
  };

  return (
    hasSidebarOptions && (
      <StyledBox>
        {sidebarOptions.map((menuOption) => (
          <IconButton sx={{ m: 1 }} key={menuOption.id} onClick={() => handleClickOption(menuOption.path)}>
            <StyledIcon component={menuOption.icon} />
          </IconButton>
        ))}
      </StyledBox>
    )
  );
}
