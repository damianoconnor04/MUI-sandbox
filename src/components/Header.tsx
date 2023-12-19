import * as React from 'react';
import { styled, alpha, Theme, CSSObject } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircleOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import ThemeToggleSwitch from './ThemeToggleSwitch';
import logoWhite from './Leap-Logo-White.svg';
import logoBlack from './Leap-Logo-Black.svg';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import SellIcon from '@mui/icons-material/Sell';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// search container styling
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.25) },
  transition: 'background 100ms linear',
  margin: 0,
  width: '100%',
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

// padding styling
const BottomPadding = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 9999,
  height: '16px',
  width: '100%',
  backgroundColor: theme.palette.background.default,
  transition: 'background 0.2s ease',
  [theme.breakpoints.up('sm')]: { bottom: 0 },
}))
const RightPadding = styled('div')(({ theme }) => ({
  height: '100%',
  width: 0,
  backgroundColor: theme.palette.background.default,
  transition: 'background 0.2s ease',
  [theme.breakpoints.up('sm')]: { width: '16px' },
}))

// body styling
const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  marginTop: '64px',
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: '8px',
  transition: 'background 0.2s ease',
  [theme.breakpoints.up('sm')]: { borderRadius: '8px' },
  [theme.breakpoints.up('sm')]: { borderRadius: '8px' },
}))

// drawer styling & components
const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
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
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
      transition: 'background 0.2s ease',
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
      transition: 'background 0.2s ease'
    }),
  }),
);

// drawer width transitions
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface HeaderProps {
  theme: Theme;
  colorMode: { toggleColorMode: () => void };
}
const Header: React.FC<HeaderProps> = ({ theme, colorMode }) => {
  // state variables & booleans
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null)
  const [isDark, setIsDark] = React.useState<Boolean>(document.documentElement.classList.contains('dark'))
  const [open, setOpen] = React.useState<boolean>(false)
  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  // keep track of theme mode
  React.useEffect(() => { setIsDark(theme.palette.mode === 'dark' ? true : false) }, [theme.palette.mode])

  // interactivity functions
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setMobileMoreAnchorEl(event.currentTarget)
  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null)
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose()
  }

  // client/candidate account view
  const [accountType, setAccountType] = React.useState<string>('Candidate')
  const [alert, setAlert] = React.useState<boolean>(false)
  const handleSwitchAccount = () => {
    setAlert(true)
    setAccountType((prevState) => prevState === 'Candidate' ? 'Client' : 'Candidate')
  }
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return
    setAlert(false)
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
    <Box sx={{ display: 'flex', height: '100%', backgroundColor: theme.palette.background.default, transition: 'background 0.2s ease' }}>
      {/* top navigation */}
      <AppBar position="fixed" open={open} enableColorOnDark elevation={0} sx={{ backgroundColor: theme.palette.background.default, transition: 'background 0.2s ease' }}>
        <Toolbar disableGutters>

          {/* open menu btn */}
          <Box sx={open ? { padding: 0 } : { padding: 1 }}>
            <IconButton
              size='large'
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: 'none' }), color: theme.palette.text.primary, transition: 'color 0.2s ease' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* logo */}
          <Box component='img' alt='LEAP Logo' src={isDark ? logoWhite : logoBlack}
            sx={{
              padding: 0,
              height: 40,
              [theme.breakpoints.down('sm')]: { display: 'none' },
            }}
          />

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
            <IconButton size='medium' aria-label='show new notifications' sx={{ color: theme.palette.text.primary, transition: 'color 0.2s ease' }}>
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
              sx={{ color: theme.palette.text.primary, transition: 'color 0.2s ease' }}
            >
              <AccountCircle />
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
              sx={{ color: theme.palette.text.primary, transition: 'color 0.2s ease' }}
            >
              <MoreIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer variant="permanent" open={open} PaperProps={{ sx: { backgroundColor: theme.palette.background.default, transition: 'background 0.2s ease', borderRight: 0 } }}>
        {/* drawer header */}
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>

        {/* drawer hot bar items */}
        <List sx={{ [theme.breakpoints.up('sm')]: { p: 0 } }}>
          {['Job Listings', 'My Applications'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', color: theme.palette.text.primary, transition: 'color 0.2s ease' }}>
                  {index < 1 && <SellOutlinedIcon />}
                  {index > 0 && <DescriptionOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: theme.palette.text.primary, transition: 'color 0.2s ease' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        {/* drawer utility items */}
        <List sx={{ mt: 'auto', [theme.breakpoints.up('sm')]: { pb: '16px'} }}>
          <ListItem key={0} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={colorMode.toggleColorMode}
              aria-label='Toggle light or dark mode'
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: theme.palette.text.primary,
                transition: 'color 0.2s ease'
              }}
              >
                {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
              </ListItemIcon>

              <ListItemText primary={isDark ? 'Light Mode' : 'Dark Mode'} sx={{ opacity: open ? 1 : 0, color: theme.palette.text.primary, transition: 'color 0.2s ease' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* body content */}
      <Main>
        <Box component='div' sx={{ p: 2, minWidth: '100%' }}>

        </Box>
      </Main>

      {/* bottom padding */}
      <BottomPadding />
      {/* right padding */}
      <RightPadding />

      {/* render pop up menus */}
      {renderMobileMenu}
      {renderMenu}

      {/* render snackbar pop ups */}
      <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Signed in as {accountType}
        </Alert>
      </Snackbar>

    </Box>
  );
}

export default Header