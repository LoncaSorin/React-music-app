import { styled } from '@mui/material/styles';
import {
  Box, Card, CardMedia, Icon, MenuItem,
} from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  width: '220px',
  minHeight: '100vh',
  padding: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    width: '160px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const StyledCard = styled(Card)(() => ({
  height: '40px',
  width: '40px',
  backgroundColor: 'transparent',
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  height: '40px',
  width: '40px',
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '& .MuiTypography-root': {
    color: theme.palette.text.secondary,
  },
  '&:hover': {
    '& .MuiTypography-root': {
      color: theme.palette.text.primary,
    },
  },
}));

export const StyledIcon = styled(Icon)(() => ({
  height: '28px',
  width: '28px',
}));
