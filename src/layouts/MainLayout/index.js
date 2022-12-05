import React from 'react';
import { Box } from '@mui/material';
import { node } from 'prop-types';

import Sidebar from '../Sidebar';
import MobileSidebar from '../MobileSidebar';
import { PageWrapper } from './index.styled';

MainLayout.propTypes = {
  children: node.isRequired,
};

export default function MainLayout(props) {
  const { children } = props;

  return (
    <PageWrapper>
      <Box display="flex">
        <Sidebar />

        {children}
      </Box>

      <MobileSidebar />
    </PageWrapper>
  );
}
