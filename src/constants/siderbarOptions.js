import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export const HOME_OPTION = {
  id: 'navigation-home',
  icon: HomeIcon,
  label: 'Home',
  path: '/',
};

export const SEARCH_OPTION = {
  id: 'navigation-search',
  icon: SearchIcon,
  label: 'Search',
  path: '/',
};

export const YOUR_LIBRARY_OPTION = {
  id: 'navigation-library',
  icon: LibraryMusicIcon,
  label: 'Your Library',
  path: '/',
};

export const sidebarOptions = [HOME_OPTION, SEARCH_OPTION, YOUR_LIBRARY_OPTION];
