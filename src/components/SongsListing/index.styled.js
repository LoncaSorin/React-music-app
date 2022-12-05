import { styled } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const StyledClockIcon = styled(AccessTimeIcon)(({ theme }) => ({
  height: '24px',
  width: '24px',
  fill: theme.palette.text.secondary,
}));
