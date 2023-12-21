import * as React from 'react';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import SideDrawer from '../../components/Drawer/SideDrawer';
import Header from '../../components/Header/Header';
import { useCustomTheme } from '../../components/[global]/theme';
import AccountSwitchToast from '../../components/[global]/AccountSwitchToast';

// initialize toggleColorMode as empty function
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });
const App = () => {
  // state variables
  const [isDark, setIsDark] = React.useState<Boolean>(document.documentElement.classList.contains('dark'))
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false)
  const [accountType, setAccountType] = React.useState<string>('Client')
  const [alert, setAlert] = React.useState<boolean>(false)

  // keep track of theme mode
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  React.useEffect(() => { setIsDark(theme.palette.mode === 'dark' ? true : false) }, [theme.palette.mode])

  // interactivity functions
  const handleDrawerOpen = () => setDrawerOpen(true)
  const handleDrawerClose = () => setDrawerOpen(false)

  // client/candidate account switch
  const handleSwitchAccount = () => {
    setAlert(true)
    setAccountType((prevState) => prevState === 'Candidate' ? 'Client' : 'Candidate')
  }

  // close snackbar pop-ups
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return
    setAlert(false)
  }

  return (
    <Box sx={{ display: 'flex', height: '100%', backgroundColor: theme.palette.background.default, }}>
      {/* top navigation */}
      <Header theme={theme} colorMode={colorMode} isDark={isDark} drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen} handleSwitchAccount={handleSwitchAccount} accountType={accountType} />
      {/* side drawer */}
      <SideDrawer currentTab='applications' theme={theme} colorMode={colorMode} drawerOpen={drawerOpen} handleDrawerClose={handleDrawerClose} accountType={accountType} />
      {/* body content */}
      <Box component='main' sx={{ flexGrow: 1, border: `1px solid ${theme.palette.divider}`, backgroundColor: theme.palette.background.paper, borderTopLeftRadius: 7, marginTop: '64px' }}>
        <Box component='div' sx={{ p: 2, minWidth: '100%' }}>

        </Box>
      </Box>
      {/* render snackbar account switch pop-ups */}
      <AccountSwitchToast alert={alert} handleClose={handleClose} accountType={accountType} />
    </Box>
  );
}


// Light/dark theme toggle
const ToggleColorMode = () => {
  // create state variables for theme mode, set initial mode to:
  // 1. saved preference in localStorage, 2. browser preference, 3. light mode
  const [mode, setMode] = React.useState<PaletteMode>(() => {
    if (localStorage.theme) return localStorage.theme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    else return 'light'
  })
  // update localStorage preference and memorized theme when user changes mode
  React.useEffect(() => {
    if (mode === 'dark') localStorage.setItem('theme', 'dark')
    else localStorage.setItem('theme', 'light')
  }, [mode])
  const colorMode = React.useMemo(() => ({ toggleColorMode: () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')) }), [])
  // create MUI theme based on selected mode
  const theme = useCustomTheme({ mode })

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode