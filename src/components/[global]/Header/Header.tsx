import * as React from 'react';
import { styled, alpha, Theme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircleOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneRounded';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import ThemeToggleSwitch from '../ThemeToggleSwitch';
import LeapLogo from '../assets/LeapLogo';
import taco from '../assets/tacobell.webp'

// app bar styling
const drawerWidth = 240;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
// search container styling
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.25) },
  transition: 'background 100ms linear',
  margin: 0,
  width: '100%',
  boxShadow: '0px 1px 4px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.06),0px 1px 5px 0px rgba(0,0,0,0.06)',
  [theme.breakpoints.up('sm')]: { width: 'auto' },
}));
// search icon styling
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
// search input styling
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    color: theme.palette.text.primary
  },
}));

interface HeaderProps {
  theme: Theme;
  colorMode: { toggleColorMode: () => void };
  isDark: Boolean;
  drawerOpen: boolean;
  handleDrawerOpen: () => void;
  handleSwitchAccount: () => void;
  accountType: string;
}
const Header: React.FC<HeaderProps> = ({ theme, colorMode, isDark, drawerOpen, handleDrawerOpen, handleSwitchAccount, accountType }) => {
  // state variables & bools
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  // interactivity functions
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setMobileMoreAnchorEl(event.currentTarget)
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null)
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose()
  }

  // desktop user pop-up menu
  const menuId = 'menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
      <MenuItem onClick={handleSwitchAccount}>Switch accounts</MenuItem>
    </Menu>
  );

  // mobile pop-up menu
  const mobileMenuId = 'menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size='large'
          aria-label='show new notifications'
          color='inherit'
        >
          <Badge badgeContent={0} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={colorMode.toggleColorMode}>
        <ThemeToggleSwitch theme={theme} />
        <p>{isDark ? 'Light' : 'Dark'} Mode</p>
      </MenuItem>
    </Menu>
  );
  return (
    <React.Fragment>
      {/* top navigation */}
      <AppBar position="fixed" open={drawerOpen} enableColorOnDark elevation={0} sx={{ backgroundColor: theme.palette.background.default, }}>
        <Toolbar disableGutters>

          {/* open menu btn */}
          <Box sx={drawerOpen ? { padding: 0 } : { padding: 1 }}>
            <IconButton
              size='large'
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              sx={{ ...(drawerOpen && { display: 'none' }), color: theme.palette.text.primary, }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* logo */}
          <Box component='a' href='/' sx={{ width: '120px', [theme.breakpoints.down('sm')]: { display: 'none '}}}>
            <LeapLogo fillColor={isDark ? '#f8f9fB' : '#121212'}/>
          </Box>


          {/* spacing */}
          <Box sx={{ flexGrow: 1 }} />

          {/* search box */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon color='secondary' />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* desktop tools */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mx: 2 }}>
            <IconButton size='medium' aria-label='show new notifications' sx={{ color: theme.palette.text.primary, }}>
              <Badge badgeContent={0} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size='medium'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              sx={{ color: theme.palette.text.primary, }}
            >
              {accountType === 'Candidate' ? <AccountCircle /> : <Box component='img' alt='profile picture' src={taco} width='1.5rem' height='1.5rem' sx={{ borderRadius: '50%' }} />}
            </IconButton>
          </Box>

          {/* condensed tools (3 dots) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, padding: 1 }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              sx={{ color: theme.palette.text.primary, }}
            >
              <MoreIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
      {/* render pop up menus */}
      {renderMobileMenu}
      {renderMenu}
    </React.Fragment>
  )
}

export default Header