import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 4.5, 0, 2),
  marginRight: theme.spacing(3),
  justifyContent: 'space-between',
  borderRadius: '8px',
  height: '64px',
  '&:hover': {
    backgroundColor: theme.palette.primary.secondary,
    cursor: 'pointer',
    '& #index-row': {
      display: 'none',
      margin: 0,
    },
    '& #play-row': {
      display: 'initial',
    },
  },
  '& #play-row': {
    display: 'none',
    '& svg': {
      fill: theme.palette.common.white,
    },
  },
}));
