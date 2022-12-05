import React from 'react';
import { Route, Routes } from 'react-router-dom';

import * as routes from './constants/clientRoutes';
import AlbumsListing from './containers/AlbumsListing';
import AlbumDetails from './containers/AlbumDetails';

export default function AppRouter() {
  return (
    <Routes>
      <Route path={routes.HOME_ROUTE} element={<AlbumsListing />} />
      <Route path={routes.ALBUM_DETAILS_ROUTE} element={<AlbumDetails />} />
    </Routes>
  );
}
