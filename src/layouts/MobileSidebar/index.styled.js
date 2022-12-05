import { styled } from '@mui/material/styles';
import { Box, Icon } from '@mui/material';

export const StyledIcon = styled(Icon)(() => ({
  height: '28px',
  width: '28px',
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '64px',
  '& svg': {
    fill: theme.palette.common.white,
  },
  '& .MuiButtonBase-root': {
    '&:hover': {
      backgroundColor: theme.palette.general.lightGrey,
    },
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    position: 'sticky',
    bottom: 0,
    backgroundColor: theme.palette.common.black,
  },
}));
