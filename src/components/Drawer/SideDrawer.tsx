import * as React from 'react';
import { styled, Theme, CSSObject, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { candidateItems, clientItems } from './_content'
import AddRounded from '@mui/icons-material/AddRounded';
import Button from '@mui/material/Button';
import ThemeToggleSwitch from '../[global]/ThemeToggleSwitch';
import Box from '@mui/material/Box'
import EditRoundedIcon from '@mui/icons-material/EditRounded';

// drawer styling
const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
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
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

// drawer width transitions
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create(['width',], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create(['width',], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)})`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)})`,
  },
});

interface SideDrawerProps {
  theme: Theme;
  colorMode: { toggleColorMode: () => void };
  drawerOpen: boolean;
  handleDrawerClose: () => void;
  accountType: string;
  currentTab?: string;
}
const SideDrawer: React.FC<SideDrawerProps> = ({ theme, colorMode, drawerOpen, handleDrawerClose, accountType, currentTab }) => {
  const [activeTab, setActiveTab] = React.useState<String>(currentTab || '')
  const [hoveredTab, setHoveredTab] = React.useState<String>('')

  return (
    // side drawer
    <Drawer variant="permanent" open={drawerOpen} PaperProps={{ sx: { backgroundColor: theme.palette.background.default, borderRight: 0, } }}>
      {/* drawer header */}
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>

      {/* drawer hot bar items */}
      <List sx={{ [theme.breakpoints.up('sm')]: { p: 0 } }}>
        {(accountType === 'Client' ? clientItems : candidateItems).map(({ icon, filledIcon, label, ref, slug }, idx) => (
          <ListItem key={ref} disablePadding onMouseEnter={() => setHoveredTab(ref)} onMouseLeave={() => setHoveredTab('')}>
            {hoveredTab === ref && <Box component='div' sx={{ position: 'absolute', height: '100%', width: '3px', backgroundColor: theme.palette.secondary.main }} /> }
            {activeTab === ref && <Box component='div' sx={{ position: 'absolute', height: '100%', width: '3px', backgroundColor: theme.palette.secondary.main }} /> }
            
            <ListItemButton href={slug} onClick={() => setActiveTab(ref)} sx={{ minHeight: 48, justifyContent: drawerOpen ? 'initial' : 'center', px: 2.5, borderTopRightRadius: idx === 0 ? '7px' : 0, }}>
              <ListItemIcon sx={{ minWidth: 0, mr: drawerOpen ? 3 : 'auto', justifyContent: 'center', color: theme.palette.text.primary, }}>
                {activeTab === ref ? React.createElement(filledIcon) : React.createElement(icon)}
              </ListItemIcon>
              <ListItemText primary={label} sx={{ opacity: drawerOpen ? 1 : 0, color: theme.palette.text.primary, }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      {/* drawer CLIENT items 
      TODO: Fix slight visual bug due to button's width not being transitioned
      */}
      {accountType === 'Client' && (
        <Box sx={{ my: '1rem', display: 'grid', placeItems: 'center', px: drawerOpen ? '1rem' : 0 }}>
          <Button startIcon={drawerOpen ? <EditRoundedIcon /> : ''} variant={drawerOpen ? 'text' : 'outlined'} color='secondary' aria-label='create new job listing' sx={drawerOpen ? { borderRadius: '7px', p: 1, width: '100%', border: `1px solid ${alpha(theme.palette.secondary.main, 0.5)}`} : { boxShadow: theme.shadows[3], borderRadius: 9999, p: 1, minWidth: 0 }}>
            {drawerOpen ? 'new listing' : <EditRoundedIcon sx={{ fontSize: '24px' }}/>}
          </Button>
        </Box>
      )}

      {/* drawer utility items */}
      <Box component='div' sx={{ mt: 'auto', display: 'grid', placeItems: 'center', mb: '0.5rem' }}>
        <ThemeToggleSwitch theme={theme} onClick={colorMode.toggleColorMode} size='medium' />
      </Box>
    </Drawer>
  )
}

export default SideDrawer