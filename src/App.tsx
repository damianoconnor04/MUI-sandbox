import React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header'

// initial toggleColorMode context
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

// layout
const App = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Header theme={theme} colorMode={colorMode} />
  );
}

// Light/dark theme toggle
const ToggleColorMode = () => {
  // create state variables for theme mode, set initial mode to:
  // 1. saved preference in localStorage, 2. browser preference, 3. light mode
  const [mode, setMode] = React.useState<'light' | 'dark'>(() => {
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
  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode,
        primary: {
          main: '#d9d9d9',
          ...(mode === 'dark' && { main: '#d9d9d9'}),
          light: '#c9c9c9',
          ...(mode === 'dark' && { light: '#3B4252'})
        },
        secondary: {
          main: '#88C0D0',
          ...(mode === 'dark' && { main: '#B2AEFF'})
        },
        background: {
          default: '#f8f9fB',
          ...(mode === 'dark' && { default: '#121212' }),
          paper: '#efefef',
          ...(mode === 'dark' && { paper: '#202325' })
        },
        text: {
          primary: '#1a1a1a',
          ...(mode === 'dark' && { primary: '#f8f9fB' }),
          secondary: '#4f4f4f',
          ...(mode === 'dark' && { secondary: '#e4e8ef' }),
        },
        
      },
    }),
    [mode],
  )
  // render App with context
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode