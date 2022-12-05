import {
  Box, Card, CardMedia, IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.secondary,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  height: '300px',
  width: '220px',
  [theme.breakpoints.down('md')]: {
    width: '200px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: '0 24px',
  },
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.general.lightGrey,
    '& .MuiButtonBase-root': {
      display: 'initial',
    },
  },
  '& .MuiButtonBase-root': {
    display: 'none',
  },
}));

export const StyledCard = styled(Card)(() => ({
  height: '100%',
  width: '100%',
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  height: '100%',
  width: '100%',
}));

export const StyledButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  height: '40px',
  width: '40px',
  backgroundColor: theme.palette.general.lightGreen1,
  '&:hover': {
    backgroundColor: theme.palette.general.lightGreen2,
    height: '44px',
    width: '44px',
    bottom: 8,
    right: 8,
    '& svg': {
      height: '28px',
      width: '28px',
    },
  },
  '& svg': {
    fill: theme.palette.common.black,
  },
  boxShadow: '1px 4px 8px 0px rgba(0,0,0,0.5)',
  position: 'absolute',
  bottom: 10,
  right: 10,
}));
