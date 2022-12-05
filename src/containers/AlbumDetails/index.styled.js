import { styled } from '@mui/material/styles';
import {
  Box, Card, CardMedia, IconButton,
} from '@mui/material';

export const StyledHeader = styled(Box)(() => ({
  backgroundImage: 'linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)',
  height: '400px',
  width: '100%',
  position: 'relative',
}));

export const StyledSongList = styled(Box)(() => ({
  backgroundImage: 'linear-gradient(35deg, rgba(0,0,0,1) 0%, rgba(25,25,25,1) 100%)',
  height: 'calc(100% - 425px)',
}));

export const StyledContentWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: 'calc(100% - 220px)',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: 'calc(100% - 160px)',
  },
}));

export const StyledAlbumInfo = styled(Box)(({ theme }) => ({
  margin: theme.spacing(7, 0, 0, 4),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(2),
    marginLeft: 0,
  },
}));

export const StyledCoverWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 25,
  left: 40,
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'initial',
  },
}));

export const StyledCard = styled(Card)(() => ({
  height: '225px',
  width: '225px',
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  height: '100%',
  width: '100%',
}));

export const StyledButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  height: '56px',
  width: '56px',
  marginLeft: theme.spacing(0.5),
  '& svg': {
    height: '32px',
    width: '32px',
    fill: theme.palette.common.black,
  },
  backgroundColor: theme.palette.general.lightGreen1,
  '&:hover': {
    backgroundColor: theme.palette.general.lightGreen2,
  },
  boxShadow: '1px 4px 8px 0px rgba(0,0,0,0.5)',
}));
