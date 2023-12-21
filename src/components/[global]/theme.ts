import { PaletteMode, createTheme } from '@mui/material'
import * as React from 'react'

// create MUI theme based on selected mode
export const useCustomTheme = ({ mode }: { mode: PaletteMode }) => {
  return React.useMemo(() =>
    createTheme({
      palette: {
        mode,
        primary: {
          main: '#d9d9d9',
          ...(mode === 'dark' && { main: '#d9d9d9' }),
          light: '#F2F2F6',
          ...(mode === 'dark' && { light: '#2a2a2f' })
        },
        secondary: {
          main: '#81A1C1',
          light: '#e0efff',
        },
        background: {
          default: '#f8f9fB',
          ...(mode === 'dark' && { default: '#121212' }),
          paper: '#f1f3f9',
          ...(mode === 'dark' && { paper: '#17191b' })
        },
        text: {
          primary: '#1a1a1a',
          ...(mode === 'dark' && { primary: '#f8f9fB' }),
          secondary: '#4f4f4f',
          ...(mode === 'dark' && { secondary: '#e4e8ef' }),
        },
        action: {
          hover: '#81A1C11A',
          ...(mode === 'dark' && { hover: '#81A1C11A' })
        }
      },
    }),
    [mode],
  );
}