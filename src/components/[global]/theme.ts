import { PaletteMode, createTheme } from '@mui/material'
import * as React from 'react'

// extend palette with custom colors
declare module '@mui/material/styles' {
  interface Palette {
    green: Palette['primary'];
    purple: Palette['primary'];
    pink: Palette['primary'];
  }
 
  interface PaletteOptions {
    green?: PaletteOptions['primary'];
    purple?: PaletteOptions['primary'];
    pink?: PaletteOptions['primary'];
  }
 }
 const green = {
  main: '#81c1c1',
  light: '#a7d0b8',
 };
 const purple = {
  main: '#8181c1',
  light: '#c7cada',
 };

 const pink = {
  main: '#c181a1',
  light: '#f5ebff',
 };

// create MUI theme based on selected mode
export const useCustomTheme = ({ mode }: { mode: PaletteMode }) => {
  return React.useMemo(() =>
    createTheme({
      palette: {
        mode,
        primary: {
          main: '#d9d9d9',
          ...(mode === 'dark' && { main: '#4a4a4f' }),
          light: '#efeff0',
          ...(mode === 'dark' && { light: '#2f2f35' })
        },
        secondary: {
          main: '#81A1C1',
        },
        green,
        purple,
        pink,
        background: {
          default: '#f8f9fB',
          ...(mode === 'dark' && { default: '#121212' }),
          paper: '#f1f3f9',
          ...(mode === 'dark' && { paper: '#17191b' })
        },
        text: {
          primary: '#1a1a1a',
          ...(mode === 'dark' && { primary: '#f8f9fB' }),
          secondary: '#5f5f5f',
          ...(mode === 'dark' && { secondary: '#e4e8ef' }),
        },
        action: {
          hover: '#81A1C11A',
          ...(mode === 'dark' && { hover: '#81A1C11A' })
        },
      },
    }),
    [mode],
  );
}