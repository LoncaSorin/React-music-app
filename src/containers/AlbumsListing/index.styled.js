import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  minHeight: '100vh',
  width: 'calc(100% - 240px)',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  [theme.breakpoints.only('md')]: {
    width: 'calc(100% - 248px)',
  },
  padding: theme.spacing(3),
}));
