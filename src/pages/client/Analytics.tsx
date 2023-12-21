import * as React from 'react';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, Grid, MenuItem, PaletteMode, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import SideDrawer from '../../components/Drawer/SideDrawer';
import Header from '../../components/Header/Header';
import { useCustomTheme } from '../../components/[global]/theme';
import AccountSwitchToast from '../../components/[global]/AccountSwitchToast';
import ExpandIcon from '@mui/icons-material/ExpandMoreRounded';
import ClickIcon from '@mui/icons-material/AdsClick';

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

  // dropdown
  const [timeframe, setTimeframe] = React.useState('This month')
  const handleChange = (event: SelectChangeEvent) => setTimeframe(event.target.value)

  return (
    <Box sx={{ display: 'flex', height: '100%', backgroundColor: theme.palette.background.default, }}>
      {/* top navigation */}
      <Header theme={theme} colorMode={colorMode} isDark={isDark} drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen} handleSwitchAccount={handleSwitchAccount} accountType={accountType} />
      {/* side drawer */}
      <SideDrawer currentTab='analytics' theme={theme} colorMode={colorMode} drawerOpen={drawerOpen} handleDrawerClose={handleDrawerClose} accountType={accountType} />
      {/* body content */}
      <Box component='main' sx={{ flexGrow: 1, border: `1px solid ${theme.palette.divider}`, backgroundColor: theme.palette.background.paper, borderTopLeftRadius: 7, marginTop: '64px' }}>
        <Stack direction='column' component='div' sx={{ p: 3, pt: 2.5, height: '100%' }}>
          {/* insights */}
          <div>
            <Typography variant='h2' sx={{ fontSize: '1.25rem', fontWeight: 700, color: theme.palette.text.primary, mb: 2 }}>Insights</Typography>
            <Stack direction='column' component='div' sx={{ backgroundColor: theme.palette.background.default, boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px', borderRadius: 4, p: 2.5, width: 'fit-content' }}>
              <Stack direction='row' component='div' sx={{ justifyContent: 'space-between', alignItems: 'flex-end', mb: 3 }}>
                <Typography variant='h3' sx={{ fontSize: '1.125rem', fontWeight: 600, cursor: 'default', color: theme.palette.text.primary }} >Top Inquiries</Typography>
                <FormControl variant='standard'>
                  <Select
                    id="timeframe"
                    value={timeframe}
                    onChange={handleChange}
                    variant='standard' disableUnderline
                    IconComponent={ExpandIcon}
                    sx={{ backgroundColor: theme.palette.primary.light, px: 1.5, py: 0.5, borderRadius: 2.5, '.MuiOutlinedInput-notchedOutline': { border: 0 }, fontSize: '0.875rem' }}
                  >
                    <MenuItem value={'This month'}>This month</MenuItem>
                    <MenuItem value={'This year'}>This year</MenuItem>
                    <MenuItem value={'All time'}>All time</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack direction='row' component='div' gap={3}>
                <Box component='div' sx={{ minWidth: '8rem', minHeight: '8rem', borderRadius: 4, border: `1px solid ${theme.palette.divider}`, backgroundColor: theme.palette.action.hover }} />
                <Grid container spacing={2}>
                  <Grid item lg={6}>
                    <Stack direction='column' component='div'>
                      <Box component='div' sx={{ width: '3ch', backgroundColor: theme.palette.secondary.main, height: 4, borderRadius: 5 }} />
                      <Typography variant='h4' sx={{ fontSize: '1rem', fontWeight: 600, cursor: 'default', color: theme.palette.text.primary, mt: 1, mb: 0.5 }} >62%</Typography>
                      <Typography variant='caption' sx={{ color: theme.palette.text.disabled }}>College educated</Typography>
                    </Stack>
                  </Grid>
                  <Grid item lg={6}>
                    <Stack direction='column' component='div'>
                      <Box component='div' sx={{ width: '3ch', backgroundColor: theme.palette.secondary.main, height: 4, borderRadius: 5 }} />
                      <Typography variant='h4' sx={{ fontSize: '1rem', fontWeight: 600, cursor: 'default', color: theme.palette.text.primary, mt: 1, mb: 0.5 }} >23%</Typography>
                      <Typography variant='caption' sx={{ color: theme.palette.text.disabled }}>Title</Typography>
                    </Stack>
                  </Grid>
                  <Grid item lg={6}>
                    <Stack direction='column' component='div'>
                      <Box component='div' sx={{ width: '3ch', backgroundColor: theme.palette.secondary.main, height: 4, borderRadius: 5 }} />
                      <Typography variant='h4' sx={{ fontSize: '1rem', fontWeight: 600, cursor: 'default', color: theme.palette.text.primary, mt: 1, mb: 0.5 }} >6%</Typography>
                      <Typography variant='caption' sx={{ color: theme.palette.text.disabled }}>Title</Typography>
                    </Stack>
                  </Grid>
                  <Grid item lg={6}>
                    <Stack direction='column' component='div'>
                      <Box component='div' sx={{ width: '3ch', backgroundColor: theme.palette.secondary.main, height: 4, borderRadius: 5 }} />
                      <Typography variant='h4' sx={{ fontSize: '1rem', fontWeight: 600, cursor: 'default', color: theme.palette.text.primary, mt: 1, mb: 0.5 }} >9%</Typography>
                      <Typography variant='caption' sx={{ color: theme.palette.text.disabled }}>Title</Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
          </div>
          {/* analytics */}
          <div>
            <Typography variant='h2' sx={{ fontSize: '1.25rem', fontWeight: 700, color: theme.palette.text.primary, my: 2  }}>Analytics Overview</Typography>
            <Stack direction='column' component='div' gap={1} sx={{ backgroundColor: theme.palette.background.default, boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px', borderRadius: 4, p: 2.5, maxWidth: '13rem', alignItems: 'center' }}>
              <ClickIcon sx={{ fontSize: '2rem', color: theme.palette.secondary.main }} />
              <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: theme.palette.secondary.main }}>18.6%</Typography>
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', color: theme.palette.text.primary }}>click rate</Typography>
              <Typography sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, textAlign: 'center' }}>Lorem ipsum dolor sit amet consecutir et al kalit.</Typography>
            </Stack>
          </div>
        </Stack>
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